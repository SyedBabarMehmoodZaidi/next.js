"use client"
export default function Lecture({params}){
    console.log(params)
    return(
        <div>
            <h1>Day Of College {params.lecture[0]}</h1>
            <h2>Lecture No. {params.lecture[1]}</h2>
        </div>
    )
}