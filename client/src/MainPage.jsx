
import { Link } from 'react-router-dom';
import NavRail from './NavRail.jsx';
import { useMediaQuery } from 'react-responsive';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import Footer from './Footer.jsx';

function MainPage() {
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
            {isDesktop ? <NavRail></NavRail>:''}
            
            
            <img className="wall" src="src/assets/wall.jpeg"></img>
            <Footer/>
        </>
    );
}

export default MainPage