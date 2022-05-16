import classes from './css/MenuContent.module.css'
import MenuProduct from './MenuProduct'

const MenuContent = ({products}) => {
    return ( 
        <div className={classes.MenuContent}>
           {
                products.list.map((product) => (
                    <MenuProduct 
                        key={product.id}
                        desc={product.dsc}
                        image={product.img}
                        price={product.price}
                        name={product.name}
                    />
                ))
           }
        </div>
     );
}
 
export default MenuContent;