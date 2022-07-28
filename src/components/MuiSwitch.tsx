import {
  Box,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Switch,
} from '@mui/material';
import React, { useState } from 'react';

const MuiSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [skills, setSkills] = useState<Record<string, boolean>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setIsDarkMode(e.target.checked);

  const handleChangeSkills = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSkills((state) => ({
      ...state,
      [e.target.value]: !state[e.target.value],
    }));

  console.log({ isDarkMode });
  console.log({ skills });

  return (
    <Box>
      <Box>
        <FormControlLabel
          label='darkMode'
          control={<Switch checked={isDarkMode} onChange={handleChange} />}
        />
      </Box>
      <Box>
        <FormControl>
          <FormLabel>Skills</FormLabel>
          <FormGroup>
            <FormControlLabel
              label='HTML'
              value='html'
              control={
                <Switch
                  checked={Boolean(skills?.html)}
                  onChange={handleChangeSkills}
                />
              }
            />
            <FormControlLabel
              label='CSS'
              value='css'
              control={
                <Switch
                  checked={Boolean(skills?.css)}
                  onChange={handleChangeSkills}
                />
              }
            />
            <FormControlLabel
              label='JavaScript'
              value='javascript'
              control={
                <Switch
                  checked={Boolean(skills?.javascript)}
                  onChange={handleChangeSkills}
                />
              }
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
};

export { MuiSwitch };
