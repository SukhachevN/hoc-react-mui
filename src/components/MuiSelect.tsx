import { Box, MenuItem, TextField } from '@mui/material';
import React, { useState } from 'react';

const MuiSelect = () => {
  const [countries, setCountries] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCountries(typeof value === 'string' ? value.split(',') : value);
  };

  console.log({ countries });

  return (
    <Box width='250px'>
      <TextField
        label='select countries'
        select
        value={countries}
        onChange={handleChange}
        fullWidth
        SelectProps={{
          multiple: true,
        }}
      >
        <MenuItem value='VN'>Việt Nam</MenuItem>
        <MenuItem value='RU'>Nga</MenuItem>
      </TextField>
    </Box>
  );
};

export { MuiSelect };
