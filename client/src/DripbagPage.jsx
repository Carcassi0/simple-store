import { Link } from 'react-router-dom';
import NavRail from './NavRail.jsx';
import { useMediaQuery } from 'react-responsive';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import ProductCard from './ProductCard.jsx';
import Footer from './Footer.jsx';

function DripbagPage(){

    const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });
    const isDesktop = useMediaQuery({ query: '(min-width: 767px)' });


    return(
        <>
        <head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        </head>
        <header>
                {isDesktop ? '':
                <div>
                    <MenuRoundedIcon className='header-mobile-menu' sx={{fontSize:'45px'}}/>
                    <h1><Link to="/" style={{textDecoration:'none', color:'black'}}>Brewchemy.</Link></h1>
                </div>
                }
            </header>
            
    

            <div className='main' >
                <div className='main-side-bar'>
                    <NavRail/>
                </div>
                <aside className="main-aside">
                    <div className='store-aside'>
                        <div className='store-title'>
                            <h1>Store</h1>
                        </div>
                        <div className="main-article">
                            <h1>article</h1>
                            </div>
                    </div>
                    <div className='main-button-part'>
                        <Link to="/beansstore" style={{textDecoration:'none', color:'black'}}>
                        <div className='main-button' ><h1 className='main-button-text'>Beans</h1></div></Link>
                        <Link to="/coldbrewstore">
                        <div className='main-button'style={{textDecoration:'none', color:'black'}}><h1 className='main-button-text'>ColdBrew</h1></div></Link>
                        <Link to="/dripbagstore">
                        <div className='main-button'style={{textDecoration:'none', color:'black'}}><h1 className='main-button-text'>Dripbag</h1></div></Link>
                        <Link to="/goodsstore">
                        <div className='main-button'style={{textDecoration:'none', color:'black'}}><h1 className='main-button-text'>Goods</h1></div></Link>
                    </div>
                    <section className='main-section'>      
                            <Link to="/" style={{textDecoration:'none', color:'black'}} ><ProductCard value={3}/></Link>
                            </section>
                            <Footer/>
                            </aside>
                            </div>
                            
                            </>
    );
}

export default DripbagPage