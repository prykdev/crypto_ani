import "./App.css";
import Header from "./components/Header";
import CollectionCard from "./components/CollectionCard";
import axios from "axios";
import {useEffect,useState} from 'react';
import Punklist from "./components/Punklist";

function App() {
  const [punklistData,setpunklistData] = useState([])
  useEffect(()=>{
   const getmynft = async() =>{
   const openseaData = await axios.get('https://testnets-api.opensea.io/assets?order_direction=asc&asset_contract_address=0x1C725597dD75ffa4C6b76a387E11B8Ee399b66D3')
   //console.log(openseaData.data.assets)
   setpunklistData(openseaData.data.assets)
   }
   return getmynft()

  },[])

  return (
    <div className="app">
      <Header />
      <Punklist punklistData={punklistData}/>
    </div>
  );
}

export default App;