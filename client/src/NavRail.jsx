
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import StoreRoundedIcon from '@mui/icons-material/StoreRounded';
import AutoStoriesRoundedIcon from '@mui/icons-material/AutoStoriesRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import { colors } from '@mui/material';
import { useState } from 'react';


const NavRail = () => {

    const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });
    const isDesktop = useMediaQuery({ query: '(min-width: 767px)' });
    // const [active, setActive] = useState(1);
    const goto = index => setActive(index);

    if(isDesktop)return(
        <div className='navRail'>
            <nav className='nav'>
                    <div className='nav-button-box'>
                        <button className='nav-button'><Link to="/"><HomeRoundedIcon
                        sx={{color:'black', fontSize:'35px',
                        '&:hover':{color:'grey'}, marginTop:'30px'}}/></Link></button>
                        <p className='nav-button-text'>Home</p>
                    </div>
                    <div className='nav-button-box'>
                        <button className='nav-button'><Link to="/"><AutoStoriesRoundedIcon
                        sx={{color:'black', fontSize:'35px',
                        '&:hover':{color:'grey'}}}/></Link></button>
                        <p className='nav-button-text'>Philosophy</p>
                    </div>
                    <div className='nav-button-box'>
                        <button className='nav-button'><Link to="/beansstore"><StoreRoundedIcon
                        sx={{color:'black', fontSize:'35px',
                            '&:hover':{color:'grey'}}}/></Link></button>
                        <p className='nav-button-text'>Store</p>
                    </div>
                    <div className='nav-button-box'>
                        <button className='nav-button'><Link to="/register"><PersonRoundedIcon
                        sx={{color:'black', fontSize:'35px',
                        '&:hover':{color:'grey'}}}/></Link></button>
                        <p className='nav-button-text'>My Page</p>  
                    </div>
            </nav>
            </div>
    );
}

export default NavRail