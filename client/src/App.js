import './App.css';
import {useState} from "react"
import axios from 'axios'
function App() {
  const [data,setData]=useState("")
  const getData=async()=>{
    
    await axios.get("/api").then(res=>setData(res.data)).catch(err=>console.log(err.message))
    
  }
  return (
    <div className="App">
      <h2>Hello </h2>
      <h4>This is my first project ,Jai sriram</h4>
      <h4>Program madeness</h4>
      <button onClick={getData}>Click for get data from server</button>
      {
        data !=="" ?<p>{data}</p>:<p>No data availble</p>
      }
    </div>
  );
}

export default App;
