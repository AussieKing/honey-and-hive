import * as React from 'react';
import { Box } from '@mui/material';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Home from './components/Home';

function App() {
  return (
  <>
    <ResponsiveAppBar />
    <Box
      sx={{
        backgroundImage: "url('/img/minh-pham-MBsReSZ2WNM-unsplash.jpg')",
        backgroundAttachment: 'fixed',
        backgroundPosition: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100vh',
        overflow: 'auto'
      }}
    >
      <Box
        sx={{
          maxWidth: '600px',
          margin: '50px auto',
          backgroundColor: 'rgba(255,255,255,0.7)', // semi-transparent white
          padding: '20px',
          borderRadius: '5px'
        }}
      >
        <div>
        </div>
      </Box>
    </Box>
  </>
  );
}

export default App;
