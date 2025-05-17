import { useState } from "react"

function useIndex(index){
    const [index,setIndex]=useState(0)
    index.forEach(element => {
        let x=document.getElementById(element.id)
        x.addEventListener("click",()=>{
            setIndex(element.index)
        })
    });
    return [index]
}

export {useIndex}