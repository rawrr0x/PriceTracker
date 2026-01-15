import cl from './RefreshButton.module.css'

const RefreshButton = ({onClick}) => {
    return(
        <button className={cl.refreshBtn} onClick={onClick}>Update</button>
    )
}

export default RefreshButton