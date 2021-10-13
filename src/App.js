
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Popuppag from './components/popuppag';
import Popupidiomes from './components/popupidiomes';
import Homepage from './components/homepage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"


function App() {

  const [checkedWeb,setCheckedWeb] = useState(false);
  const [checkedSeo,setCheckedSeo] = useState(false);
  const [checkedAd,setCheckedAd] = useState(false);
  const [preu,setpreu] = useState(0);
  const [pags, setpags] = useState(0);
  const [idiomes, setidiomes] = useState(0);
  const [pagmodal,openpagmodal] = useState(false);
  const [idiomesmodal, openidiomesmodal] = useState(false);
  const [preufinalweb, setpreufinalweb] = useState(0);

  const preuweb = () => {
    setCheckedWeb(!checkedWeb);
    if(!checkedWeb){
      setpreu(preu + 500);
    }else{
      setpreu(preu-500)
      setpreufinalweb(0);
    }
  }

  const preuseo = () => {
    setCheckedSeo(!checkedSeo);
    if(!checkedSeo){
      setpreu(preu+300);
    }else{
      setpreu(preu-300);
    }
  }

  const preuad = () => {
    setCheckedAd(!checkedAd);
    if(!checkedAd){
      setpreu(preu+200);
    }else{
      setpreu(preu-200);
    }
  }

  const pagsuma = () => {
    setpags(parseInt(pags)+1);
    const newpags = parseInt(pags) + 1;
    localStorage.setItem("pags",newpags);
  }

  const pagresta = () => {
    if (pags > 0){
    setpags(parseInt(pags)-1);
    const newpags = parseInt(pags) - 1;
    localStorage.setItem("pags",newpags);
    }
  }

  const getPags = (val) => {
    setpags(val.target.value)
    setpreufinalweb(preu+(pags*idiomes*30))
    }


  const idiomessuma = () => {
      setidiomes(parseInt(idiomes)+1);
      const newidiomes = parseInt(idiomes) + 1;
      localStorage.setItem("idiomes",newidiomes);
  }

  const idiomesresta = () => {
      if (idiomes > 0){
      setidiomes(parseInt(idiomes)-1);
      const newidiomes = parseInt(idiomes) - 1;
      localStorage.setItem("idiomes",newidiomes);
      }
  }

  const getIdiomes = (val) => {
    setidiomes(val.target.value);
    setpreufinalweb(preu+(pags*idiomes*30));
  }

  const showpagmodal = () => {
      openpagmodal(!pagmodal);
  }

  const showidiomesmodal = () => {
      openidiomesmodal(!idiomesmodal);
  }

  useEffect(()=>{
    if (!checkedWeb){
      setpreufinalweb(0)
    }else{
    if (pags===0){setpags(1)}
    if (idiomes===0){setidiomes(1)}
    setpreufinalweb(preu+(pags*idiomes*30));
    }
  },[pags,idiomes]);

  return (
          <Router>
            <Switch>
              <Route path="/main">
                <div className='mainApp'>
                  <div className='main'>
                      <h1 className='title'>Que vols fer?</h1>
                    <div>
                      <div className='checkboxes'>
                        <label className='checkboxLabel'>
                            <input className='checkbox' type="checkbox" checked={checkedWeb} onChange={preuweb} value = {500}/>
                            Una pàgina web (500€)
                        </label>
                        {checkedWeb ? 
                          <div className='counter'>
                            <div className='countItem'> 
                              <h1 className='titleCount'>Número de pàgines</h1>
                              <button className='countButton' onClick={pagresta}>-</button>
                                <input className='inputBox' type='number' onChange={getPags} value={pags}></input>
                              <button className='countButton' onClick={pagsuma}>+</button>
                              <button onClick={showpagmodal}>info</button>
                              {pagmodal && <Popuppag/>}
                            </div>
                            <div className='countItem'>
                              <h1 className='titleCount'>Número d'idiomes</h1>
                              <button className='countButton' onClick={idiomesresta}>-</button>
                                <input className='inputBox' type='number' onChange={getIdiomes} value={idiomes}></input>
                              <button className='countButton' onClick={idiomessuma}>+</button>
                              <button onClick={showidiomesmodal}>info</button>
                              {idiomesmodal && <Popupidiomes/>}
                            </div>
                          </div>
                        :''}
                        <label className='checkboxLabel'>
                            <input className='checkbox' type="checkbox" checked={checkedSeo} onChange={preuseo} value = {300}/>
                            Una consultoria SEO (300€)
                        </label>
                        <label className='checkboxLabel'>
                            <input className='checkbox' type="checkbox" checked={checkedAd} onChange={preuad} value = {200}/>
                            Una campanya de Google Ads (200€)
                        </label>
                      </div>
                    </div>
                      <h1 className='preu'>Preu: {preufinalweb+preu}</h1>
                    </div>
                </div>
              </Route>
              <Route path="/">
                <Homepage/>
              </Route>
          </Switch>
        </Router>
    );
}

export default App;
