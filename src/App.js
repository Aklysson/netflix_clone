import './App.css';
import  Tmdb from './Api'
import { useEffect, useState } from 'react';

function App() {

  const [useList,setUseList] = useState([])

  useEffect(()=>{
    const loadAll = async() =>{
      let list = await Tmdb.getHomeList()
      setUseList(list)
      console.log(list)
    }

    loadAll()
  },[])
  return (
    <div className="App">
      {
        useList.map((e,index) => (
          <p>{e.slug}</p>
        ))
      }
    </div>
  );
}

export default App;
