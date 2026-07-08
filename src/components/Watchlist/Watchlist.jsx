import { useContext } from "react";
import Header from "../Header/Header";
import { WatchlistContext } from "../../contexts/WatchlistContext";

function Watchlist() {
 
  const {watchlist} = useContext(WatchlistContext);
  console.log(watchlist);

  return (
    <>
      <Header/>

    </>
  );
}

export default Watchlist;