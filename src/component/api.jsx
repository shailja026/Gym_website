
import React,{useEffect,useState} from "react"
import axios from "axios"

function Api() {
    const [post , setPost] = useState(null)
    const url = "https://exercisedb.p.rapidapi.com/exercises/bodyPartList"
    useEffect(()=>{
        axios.get(url).then((response) => {
            setPost(response.data);
          })
    },[])

   
  return (
    <div>{post}</div>
  )
}

export default Api