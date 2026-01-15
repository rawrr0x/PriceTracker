import cl from './TokenCardModal.module.css';
import ModalContext from '../../context/ModalContext';
import { useContext } from 'react';

const TokenCardModal = ({token}) => {
    const {isModalDisabled, setIsModalDisabled, modalContent, setModalContent} = useContext(ModalContext);
    return(
        <div 
            className={isModalDisabled 
                ? cl.tokenCardModalBackground.disabled
                : cl.tokenCardModalBackground
            } 
            onClick={() => {
                setIsModalDisabled(true);
                setModalContent({});
            }}>
            <div className={cl.tokenCardModal}>
                <div className={cl.tokenCardModalHeader}>
                    <p>
                        {modalContent.symbol
                            ? modalContent.symbol.toUpperCase() + '/USD'
                            : null
                        }
                    </p>
                    <p>{modalContent.name}</p>
                </div>
                <div>
                    <h2>{modalContent.current_price}</h2>
                    <h2>SOON...</h2>
                </div>
            </div>
        </div>
    )
}

export default TokenCardModal;