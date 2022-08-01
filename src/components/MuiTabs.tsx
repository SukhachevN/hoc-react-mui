import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Tab } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react';

const MuiTabs = () => {
  const [value, setValue] = useState('1');

  const handleChange = (e: React.SyntheticEvent, val: string) => setValue(val);

  return (
    <Box>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '300px' }}>
          <TabList
            aria-label='tabs example'
            onChange={handleChange}
            textColor='secondary'
            indicatorColor='secondary'
            variant='scrollable'
            scrollButtons='auto'
          >
            <Tab
              label='tab one'
              value='1'
              icon={<FavoriteIcon />}
              iconPosition='end'
            />
            <Tab label='tab two' value='2' disabled />
            <Tab label='tab three' value='3' />
            <Tab label='tab 4' value='4' />
            <Tab label='tab 5' value='5' />
            <Tab label='tab 6' value='6' />
          </TabList>
        </Box>
        <TabPanel value='1'> Panel One</TabPanel>
        <TabPanel value='2'> Panel Two</TabPanel>
        <TabPanel value='3'> Panel Three</TabPanel>
        <TabPanel value='4'> Panel 4</TabPanel>
        <TabPanel value='5'> Panel 5</TabPanel>
        <TabPanel value='6'> Panel 6</TabPanel>
      </TabContext>
    </Box>
  );
};

export { MuiTabs };
