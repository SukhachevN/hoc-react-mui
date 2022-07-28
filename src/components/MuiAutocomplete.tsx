import { Autocomplete, Stack, TextField } from '@mui/material';
import { useState } from 'react';

type Skill = {
  id: number;
  label: string;
};

const skills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React'];

const skillOptions: Skill[] = skills.map((label, index) => ({
  id: index + 1,
  label,
}));

const MuiAutocomplete = () => {
  const [value, setValue] = useState<string | null>(null);
  const [skill, setSkill] = useState<Skill | null>(null);

  console.log({ value });
  console.log({ skill });

  return (
    <Stack spacing={2} width='250px'>
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label='Skills' />}
        value={value}
        onChange={(_, val) => setValue(val)}
        freeSolo
      />
      <Autocomplete
        options={skillOptions}
        renderInput={(params) => <TextField {...params} label='Skills' />}
        value={skill}
        onChange={(_, val) => setSkill(val)}
      />
    </Stack>
  );
};

export { MuiAutocomplete };
