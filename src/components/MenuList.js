import classes from './css/MenuList.module.css'

const MenuList = ({handleChoice}) => {
    const choices = ['Burgers', 'Breads', 'Sandwiches', 'Drinks', 'Pizzas']
    return ( 
        <div className={classes.menu}>
            <h3>Popular</h3>
            <ul className={classes.list}>
                {choices.map(choice => (
                    <li key={choice} onClick={() => handleChoice(choice)}>{choice}</li>
                ))}
            </ul>
        </div>
     );
}
 
export default MenuList;