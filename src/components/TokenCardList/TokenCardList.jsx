import TokenCard from "../TokenCard/TokenCard"
import cl from './TokenCardList.module.css'

const TokenCardList = ({tokens}) => {
    return(
        <div>
            <div className={cl.tokenCardListHeader}>
                <h3>Token</h3>
                <h3>Price $</h3>
            </div>
            {Object.entries(tokens).map((token) => 
                <TokenCard token={token[1]} key={token[0]}/>
            )}
        </div>
    )
}

export default TokenCardList