import { useContext, useState } from "react"
import cl from './TokenCard.module.css'
import ModalContext from "../../context/ModalContext";

const TokenCard = ({token}) => {

    const {isModalDisabled, setIsModalDisabled, modalContent, setModalContent} = useContext(ModalContext);

    const showModal = () => {
        setModalContent({...token});
        setIsModalDisabled(false);
        console.log(token);
    }

    return(
        <div className={cl.tokenCard} onClick={showModal}>
            <div className={cl.tokenCardHeader}>
                <div className={cl.tokenCardHeaderTitle}>
            <img src={token.image} alt="" />
            <h3>{token.symbol.toUpperCase()}/USD</h3>
                </div>
            <h3 className={
                token.price_change_percentage_24h >= 0
                ? cl.pricePump
                : cl.priceDump
            }>{token.current_price}{
                token.price_change_percentage_24h >= 0
                ? <p>&#128200;</p>
                : <p>&#128201;</p>
            }</h3>
            </div>
            <div className={cl.tokenCardFooter}>
                <h5>Market cap: {token.market_cap}$</h5>
                <h5>ATH: {token.ath}$</h5>
            </div>
        </div>
    )
}

export default TokenCard