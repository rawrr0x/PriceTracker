import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import TokenCardList from './components/TokenCardList/TokenCardList'

function App() {
  const [tokenInfo, setTokenInfo] = useState([])
  const [refresh, setRefresh] = useState(0)

  const url = 'https://api.coingecko.com/api/v3/coins/markets?' +
    'vs_currency=usd&order=market_cap_desc&per_page=25&page=1' +
    '&sparkline=true&price_change_percentage=1h,24h,7d'

  const getTokensJson = async (url) => {
    try {
      const res = await fetch(url)
      if(!res.ok) throw new Error(res.status)
      const json = res.json()
      return json
    } catch (error) {
      console.error('fetch error: ', error)
    }
  }

  useEffect(() => {
    const getTokensInfo = () => {
      getTokensJson(url)
      .then(json => {
        setTokenInfo(prev => ({
        ...prev,
        ...json
      }))
      })
    }
    getTokensInfo()
  }, [refresh])

  return (
    <>
    <div>
      <Header refresh={() => setRefresh(refresh+1)}/>
    <h1 style={{marginTop: '11vh'}}>Crypto</h1>
    {
      (tokenInfo) 
      ? <TokenCardList tokens={tokenInfo}/>
      : <h2>Tokens not found yet...</h2>
    }
    </div>
    </>
  )
}

export default App
