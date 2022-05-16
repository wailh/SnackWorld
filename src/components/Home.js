import Hero from './Hero';
import MenuWrapper from './MenuWrapper';
import { Element } from 'react-scroll';
import classes from './css/Home.module.css'

const Home = () => {
    return (
        <div className={classes.home}>
            <Hero />
            <Element name="menu">
              <MenuWrapper />
            </Element>
        </div>
    )
}

export default Home;