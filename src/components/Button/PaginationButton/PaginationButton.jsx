import cl from './PaginationButton.module.css';

const PaginationButton = ({btnText, onClick}) => {
    return(
        <button className={cl.paginationBtn} onClick={onClick}>{btnText}</button>
    )
}

export default PaginationButton;