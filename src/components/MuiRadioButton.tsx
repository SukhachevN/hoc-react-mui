import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import { useState } from 'react';

const MuiRadioButton = () => {
  const [value, setValue] = useState('');

  console.log({ value });

  return (
    <Box>
      <FormControl>
        <FormLabel id='job-experience-group-label'>
          Years of experience
        </FormLabel>
        <RadioGroup
          name='job-experience-group'
          aria-labelledby='job-experience-group-label'
          value={value}
          onChange={(_, value) => setValue(value)}
          row
        >
          <FormControlLabel control={<Radio />} label='0-2' value='0-2' />
          <FormControlLabel control={<Radio />} label='3-6' value='3-6' />
          <FormControlLabel control={<Radio />} label='6+' value='6+' />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export { MuiRadioButton };
