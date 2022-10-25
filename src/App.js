import './App.css';
import  Tmdb from './Api'
import { useEffect, useState } from 'react';
import { MovieRow } from './components/MovieRow';
import { Global } from './global';
import { FilmeDestaque } from './components/FeaturedMovie';

function App() {

  const [useList,setUseList] = useState([])
  const [featureData, setFeatureData] = useState()

  useEffect(()=>{
    const loadAll = async() =>{
      let list = await Tmdb.getHomeList()
      setUseList(list)


      let filtedlist = list.filter(i=>i.slug === 'originals')
      let randomChosen = Math.floor(Math.random() * (filtedlist[0].items.results.length - 1))
      let choosenOne = filtedlist[0].items.results[randomChosen]
      

      let choosenInfo = await Tmdb.getMovie(choosenOne.id, 'tv')
      console.log(choosenInfo)
      setFeatureData(choosenInfo);

    }


    loadAll()
  },[])
  return (
    <div className="App">
      {featureData &&
      <FilmeDestaque item={featureData}/> 
      }
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
