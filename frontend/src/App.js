import  Axios  from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import { Create } from './create';

import { Table1 } from './table';


function App() {
  const [data,setData]=useState([])
  useEffect(()=>{
    getData()
  },[])


  const getData=()=>{
    Axios.get("http://localhost:5000/get").then((res) => setData(res.data));
  }

  return (
    <div className="App">
      <h3>CRUD</h3>
      <div style={{display:"flex",gap:"10px"}}>
        <Create/>
        <Table1 data={data}/>
      </div>
      
     
    </div>
  );
}

export default App;
