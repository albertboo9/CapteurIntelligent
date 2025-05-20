class FakeEsp {
    constructor() {
        this.temperature=[];
        this.humidity=[];
        this.distance=[];
        this.presence=false;
    }
    genrateFakeData(){
        this.temperature.push(Math.floor(Math.random() * (40 - 20 + 1)) + 20)
        this.humidity.push(Math.floor(Math.random() * (100 - 50 + 1)) + 50)
        this.distance.push(Math.floor(Math.random() * (50)))

    }
}