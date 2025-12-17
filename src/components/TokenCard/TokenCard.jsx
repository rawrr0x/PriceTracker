import { useState } from "react"
import cl from './TokenCard.module.css'

const TokenCard = ({token, ticker}) => {
    return(
        <div className={cl.tokenCard}>
            <h2>{ticker}/USD</h2>
            <h2 className={
                token.usd_24h_change >= 0
                ? cl.pricePump
                : cl.priceDump
            }>{token.usd}{
                token.usd_24h_change >= 0
                ? <p>&#128200;</p>
                : <p>&#128201;</p>
            }</h2>
        </div>
    )
}

export default TokenCard