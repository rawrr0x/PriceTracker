import { createContext, useEffect, useMemo, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import TokenCardList from './components/TokenCardList/TokenCardList';
import PaginationBlock from './components/PaginationBlock/PaginationBlock';
import TokenCardModal from './components/TokenCardModal/TokenCardModal';
import ModalContext from './context/ModalContext';

function App() {
  const [tokenInfo, setTokenInfo] = useState([]);
  const [page, setPage] = useState(1);
  const [refresh, setRefresh] = useState(0);
  const [isModalDisabled, setIsModalDisabled] = useState(true);
  const [modalContent, setModalContent] = useState({});
  
  useEffect(() => {
    const getTokensInfo = () => {
      getTokensJson()
      .then(json => {
        setTokenInfo(prev => ({
        ...prev,
        ...json
      }))
      })
    }
    getTokensInfo();
  }, [refresh, page]);

  const getTokensJson = async () => {
    try {
      const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?' +
    `vs_currency=usd&order=market_cap_desc&per_page=20&page=${page}` +
    '&sparkline=true&price_change_percentage=1h,24h,7d');
      if(!res.ok) throw new Error(res.status);
      const json = res.json();
      console.log(json);
      return json;
    } catch (error) {
      console.error('fetch error: ', error);
    }
  }

  return (
    <>
    <ModalContext.Provider value={{
      isModalDisabled,
      setIsModalDisabled,
      modalContent,
      setModalContent
    }}>
      <TokenCardModal/>
      <Header refresh={() => setRefresh(refresh + 1)}/>
      <h1 style={{marginTop: '11vh'}}>Crypto</h1>
      {
        (tokenInfo) 
        ? <TokenCardList tokens={tokenInfo}/>
        : <h2>Tokens not found yet...</h2>
      }
      <PaginationBlock 
        page={page} 
        setPage={setPage}
      />
    </ModalContext.Provider>
    </>
  )
}

export default App
