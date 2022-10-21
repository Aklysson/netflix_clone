import './App.css';
import  Tmdb from './Api'
import { useEffect, useState } from 'react';
import { MovieRow } from './components/MovieRow';
import { Global } from './global';

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
          <MovieRow key={index} title={e.title} content={e.items} />
        ))
      }
      <Global />
    </div>
  );
}

export default App;
