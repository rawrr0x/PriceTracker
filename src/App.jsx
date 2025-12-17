import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import TokenCardList from './components/TokenCardList/TokenCardList'

function App() {

  const [tokenPrices, setTokenPrices] = useState({})
  const [refresh, setRefresh] = useState(0)

  // new api: 'https://api.coingecko.com/api/v3/coins/markets?'vs_currency=usd&order=market_cap_desc&per_page=20&page=1'&sparkline=true&price_change_percentage=24h'


  const url = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana,hyperliquid,litecoin,arbitrum,tron,sui,ripple,aptos,binancecoin&vs_currencies=usd&include_24hr_change=true'

  const getTokensJson = async (url) => {
    try {
      const responce = await fetch(url)
      if(!responce.ok) throw new Error(responce.status)
      const json = responce.json()
      return json 
    } catch (error) {
      console.error('fetch error: ', error)
    }
  } 

  useEffect(() => {
    const getTokensInfo = () => {
      getTokensJson(url)
      .then(json => setTokenPrices(json))
    }
    getTokensInfo()
  }, [refresh])

  return (
    <>
    <div>
      <Header refresh={() => setRefresh(refresh+1)}/>
    <h1 style={{marginTop: '11vh'}}>Crypto</h1>
    {
      (tokenPrices.bitcoin) 
      ? <TokenCardList tokens={tokenPrices}/>
      : <h2>Tokens not found yet...</h2>
    }
    </div>
    </>
  )
}

export default App
