

import Box from '@mui/material/Box';
import { useMediaQuery } from 'react-responsive';

function Article(){
    const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });
    const isDesktop = useMediaQuery({ query: '(min-width: 767px)' });

    return (
        <Box
          sx={{
            position:'fixed',
            left: '13vh',
            top: '1vh',
            bottom:'1vh',
            width: '100vh',
            height: 'auto',
            color: '#fff',
            backgroundColor:'grey',
            borderRadius:'6px',
            '& > .MuiBox-root > .MuiBox-root': {
              p: 1,
              borderRadius: 2,
              fontSize: '0.875rem',
              fontWeight: '700',
            },
          }}
        >
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 1,
              gridTemplateRows: 'auto',
              gridTemplateAreas: `"header header header sidebar"
            "main main main main"
            "footer footer footer footer"`,
            }}
          >
            <Box sx={{ gridArea: 'header', bgcolor: 'primary.main'}}>
                <p style={{fontSize:'7vh'}}>ColdBrew</p>
            </Box>
            <Box sx={{ gridArea: 'main', bgcolor: 'secondary.main'}}>Main</Box>
            <Box sx={{ gridArea: 'sidebar', bgcolor: 'error.main' }}>Photo</Box>
            <Box sx={{ gridArea: 'footer', bgcolor: 'warning.dark'}}>Footer</Box>
          </Box>
        </Box>
      );
    }
export default Article