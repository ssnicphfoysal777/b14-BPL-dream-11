import { Suspense, use, useState } from "react";
import Banner from "./components/Banner"
import Nav from "./components/Nav"
import Players from "./components/Players";
import type { IPlayer } from "./Typs/Player";

const PlayersFetch = async (): Promise<IPlayer[]> => {
  const res = await fetch('/data.json');
  const data = await res.json();
  return data;
};

 function App() {
  //  const PlayersPromise=PlayersFetch()
  const [PlayersPromise]=useState (()=>PlayersFetch());

   const[coin,setCoin]=useState(3000);
  return (           
    <>           
     <Nav coin={coin}/>
     <Banner/>
     <Suspense fallback={<h2>Loading...</h2>}>
      <Players PlayersPromise={PlayersPromise}coin={coin} setCoin={setCoin} />
      </Suspense>
    </>
  )
}

export default App
