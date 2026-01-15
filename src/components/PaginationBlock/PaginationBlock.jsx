import cl from './PaginationBlock.module.css';
import PaginationButton from '../Button/PaginationButton/PaginationButton';

const PaginationBlock = ({page, setPage}) => {
    return(
        <div className={cl.paginationBlock}>
            {page > 1
            ? <PaginationButton btnText='Back' onClick={() => setPage(prev => prev - 1)}/>
            : null
            }
            <h2>{page}</h2>
            {page == 5 // top 100
            ? null
            : <PaginationButton btnText='Next' onClick={() => setPage(prev => prev + 1)}/>
            } 
        </div>
    )
}

export default PaginationBlock;