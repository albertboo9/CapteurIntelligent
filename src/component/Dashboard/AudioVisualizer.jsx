import React, { useState, useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const AudioVisualizer = () => {
  const [audioData, setAudioData] = useState([]);
  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const animationFrameIdRef = useRef(null);
  const streamRef = useRef(null);
  const bufferLengthRef = useRef(0);
  const dataArrayRef = useRef(null);

  useEffect(() => {
    const getMicrophoneAndStartAnalysis = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        streamRef.current = stream;

        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        audioContextRef.current = audioContext;

        const source = audioContext.createMediaStreamSource(stream);
        const analyser = audioContext.createAnalyser();
        analyserRef.current = analyser;

        analyser.fftSize = 2048;
        bufferLengthRef.current = analyser.frequencyBinCount;
        dataArrayRef.current = new Uint8Array(bufferLengthRef.current);

        source.connect(analyser);

        const updateAudioData = () => {
          analyser.getByteTimeDomainData(dataArrayRef.current);
          const normalizedData = Array.from(dataArrayRef.current).map(value => value / 255);
          setAudioData(prevData => [...prevData.slice(-(window.innerWidth / 2)), ...normalizedData]);
          animationFrameIdRef.current = requestAnimationFrame(updateAudioData);
        };

        updateAudioData();

      } catch (error) {
        console.error('Error accessing microphone:', error);
      }
    };

    getMicrophoneAndStartAnalysis();

    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const chartData = {
    labels: audioData.map((_, index) => index),
    datasets: [
      {
        label: 'Amplitude',
        data: audioData,
        fill: false,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        pointRadius: 0,
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        min: 0,
        max: 1,
        title: {
          display: true,
          text: 'Amplitude (Normalisée)',
        },
      },
      x: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    animation: false,
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div style={{ height: '300px', width: '100%' }}>
      {audioData.length > 0 ? (
        <Line key="audio-visualizer-chart" data={chartData} options={chartOptions} />
      ) : (
        <p>En attente de l'accès au microphone et des données audio...</p>
      )}
    </div>
  );
};

export default AudioVisualizer;