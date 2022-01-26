import "./App.css";
import Header from "./components/Header";
import axios from "axios";
import { useEffect, useState } from "react";
import Punklist from "./components/Punklist";
import Main from "./components/Main";
function App() {
  const [punkListData, setpunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(1);

  useEffect(() => {
    const getmynft = async () => {
      const openseaData = await axios.get(
        "https://testnets-api.opensea.io/assets?order_direction=asc&asset_contract_address=0x1C725597dD75ffa4C6b76a387E11B8Ee399b66D3"
      );
      //console.log(openseaData.data.assets)
      setpunkListData(openseaData.data.assets);
    };
    return getmynft();
  }, []);

  return (
    <div className="app">
      <Header />
      {punkListData.length>0 && (
      <>
        <Main punkListData={punkListData} selectedPunk={selectedPunk} />
        <Punklist
          punklistData={punkListData}
          setSelectedPunk={setSelectedPunk}
        />
      </>
      )}
    </div>
  );
}
export default App;
