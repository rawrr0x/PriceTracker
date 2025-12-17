import RefreshButton from '../Button/RefreshButton/RefreshButton'
import cl from './Header.module.css'

const Header = ({refresh}) => {
    return(
        <header className={cl.header}>
            <div className={cl.headerTitle}>
                <h2 style={{color: 'rgba(79, 183, 79, 1)'}}>Price</h2>
                <h2 style={{color: '#ae3e3eff'}}>Tracker</h2>
            </div>
            <RefreshButton onClick={refresh}/>
        </header>
    )
}

export default Header