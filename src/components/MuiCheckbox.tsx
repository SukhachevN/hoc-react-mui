import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from '@mui/material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import React, { useState } from 'react';

const MuiCheckbox = () => {
  const [acceptTnC, setAcceptTnC] = useState(false);
  const [skills, setSkills] = useState<Record<string, boolean>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setAcceptTnC(e.target.checked);

  const handleChangeSkills = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSkills((state) => ({
      ...state,
      [e.target.value]: !state[e.target.value],
    }));

  console.log({ acceptTnC });
  console.log({ skills });

  return (
    <Box>
      <Box>
        <FormControlLabel
          label='I accept terms and condtions'
          control={<Checkbox checked={acceptTnC} onChange={handleChange} />}
        />
      </Box>
      <Box>
        <Checkbox
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
          checked={acceptTnC}
          onChange={handleChange}
        />
      </Box>
      <Box>
        <FormControl>
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label='HTML'
              value='html'
              control={
                <Checkbox
                  checked={Boolean(skills?.html)}
                  onChange={handleChangeSkills}
                />
              }
            />
            <FormControlLabel
              label='CSS'
              value='css'
              control={
                <Checkbox
                  checked={Boolean(skills?.css)}
                  onChange={handleChangeSkills}
                />
              }
            />
            <FormControlLabel
              label='JavaScript'
              value='javascript'
              control={
                <Checkbox
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

export { MuiCheckbox };
