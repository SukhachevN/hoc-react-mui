import { Drawer, IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

const MuiDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <IconButton size='large' onClick={() => setIsOpen(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer anchor='left' open={isOpen} onClose={() => setIsOpen(false)}>
        <Box p={2} textAlign='center' role='presentation' width='250px'>
          <Typography variant='h6' component='div'>
            Side Panel
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};

export { MuiDrawer };
