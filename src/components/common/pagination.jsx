import _ from 'lodash'

const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {

    const pagesCount = Math.ceil(itemsCount / pageSize);
    if ( pagesCount === 1 ) return null;
    const pages = _.range(1, pagesCount + 1);

    return ( 
        <ul className="pagination">
            {
                pages.map(page => (
                    <li key={page} className={(currentPage === page) ? "page-item active" : 'page-item'} style={{cursor: 'pointer'}}>
                       <a 
                          className="page-link" 
                          onClick={() => onPageChange(page)}>
                          {page}
                        </a>
                    </li>
                ))
            }
        </ul>
     );
}
 
export default Pagination;