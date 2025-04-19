import { useContext } from "react"
import { BioContext } from "."




export const Home=()=>{
    const {myName,myAge} = useContext(BioContext)
    return <h1>hello context api//my name is {myName},  i am {myAge} year old </h1>

}