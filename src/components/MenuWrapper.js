import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { loadProducts, getProducts } from '../store/products';

import { AiOutlineUp } from "react-icons/ai";
import classes from './css/MenuWrapper.module.css'
import MenuList from './MenuList';
import MenuContent from './MenuContent';
import MenuProduct from './MenuProduct';
import Pagination from './common/pagination';
import { paginate } from './utils/paginate'
import Stack from '@mui/material/Stack';
import { css } from "@emotion/react";
import { animateScroll as scroll } from 'react-scroll'

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const MenuWrapper = () => {
    const [url, setUrl] = useState('pizzas')

    const [pageSize, setpageSize] = useState(8)
    const [currentPage, setCurrentPage] = useState(1);

    const [showTopBtn, setShowTopBtn] = useState(false);
    const dispatch = useDispatch();

    const productsList = useSelector(state => state.products.list)

    useEffect(() => {
        let mounted = true;
        if(mounted){
           dispatch(loadProducts(url))
        }
        return () => mounted = false;
    }, [url])

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);

    const handlePageChange = (page) => {
        setCurrentPage(page)
    }

    const handleChoice = (choice) => {
        setUrl(choice)
    }
    
    const products = paginate(productsList, currentPage, pageSize)

    return ( 
        <div className={classes.menuWrapper}>
            <MenuList handleChoice={handleChoice}/>
            <div className={classes.menuContainer}>
                    { productsList.length === 0 ?
                        <div className='spinner-width d-flex justify-content-center mt-5'>
                            <div className="spinner-grow text-success me-1" role="status"></div>
                            <div className="spinner-grow text-danger me-1" role="status"></div>
                            <div className="spinner-grow text-warning me-1" role="status"></div>
                            <div className="spinner-grow text-info me-1" role="status"></div>
                        </div> 
                    :
                        <div >
                            <div className={classes.MenuContent}>
                            {
                                products.map((product) => (
                                    <MenuProduct 
                                        product={product}
                                        key={product.id}
                                    />
                                ))}
                            </div>
                            <Pagination 
                                itemsCount={productsList.length}
                                pageSize={pageSize}
                                currentPage={currentPage}
                                onPageChange={handlePageChange}
                            />
                        </div>
                    }
            </div>
            <span 
               className={showTopBtn ? 'scroll-top show' : 'scroll-top hide'}
               onClick={() => scroll.scrollToTop()}
               data-ani="flash"
               ><AiOutlineUp /></span>
        </div>
     );
}


export default MenuWrapper;