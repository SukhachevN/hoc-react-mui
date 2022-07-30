import {
  BottomNavigation,
  BottomNavigationAction,
  Typography,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import { useState } from 'react';
import { Box } from '@mui/system';

const MuiBottomNavigation = () => {
  const [value, setValue] = useState(0);

  console.log(value);

  return (
    <>
      <Box>
        {value === 0 && <Typography variant='h6'>Home</Typography>}
        {value === 1 && <Typography variant='h6'>Favorites</Typography>}
        {value === 2 && <Typography variant='h6'>Profile</Typography>}
      </Box>
      <BottomNavigation
        sx={{ width: '100%', position: 'absolute', bottom: '0' }}
        value={value}
        onChange={(_, val) => setValue(val)}
        showLabels
      >
        <BottomNavigationAction label='Home' icon={<HomeIcon />} />
        <BottomNavigationAction label='Favorites' icon={<FavoriteIcon />} />
        <BottomNavigationAction label='Profile' icon={<PersonIcon />} />
      </BottomNavigation>
    </>
  );
};

export { MuiBottomNavigation };
