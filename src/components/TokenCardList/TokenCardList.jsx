import TokenCard from "../TokenCard/TokenCard"
import cl from './TokenCardList.module.css'

const TokenCardList = ({tokens}) => {
    return(
        <div>
            <div className={cl.tokenCardListHeader}>
                <h3>Token</h3>
                <h3>Price $</h3>
            </div>
            <TokenCard ticker={'BTC'} token={tokens.bitcoin}/>
            <TokenCard ticker={'ETH'} token={tokens.ethereum}/>
            <TokenCard ticker={'SOL'} token={tokens.solana}/>
            <TokenCard ticker={'BNB'} token={tokens.binancecoin}/>
            <TokenCard ticker={'HYPE'} token={tokens.hyperliquid}/>
            <TokenCard ticker={'ARB'} token={tokens.arbitrum}/>
            <TokenCard ticker={'LTC'} token={tokens.litecoin}/>
            <TokenCard ticker={'TRX'} token={tokens.tron}/>
            <TokenCard ticker={'SUI'} token={tokens.sui}/>
            <TokenCard ticker={'XRP'} token={tokens.ripple}/>
            <TokenCard ticker={'APT'} token={tokens.aptos}/>
        </div>
    )
}

export default TokenCardList