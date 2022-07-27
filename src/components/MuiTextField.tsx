import { IconButton, InputAdornment, Stack, TextField } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';

const MuiTextField = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [value, setValue] = useState('');

  return (
    <Stack spacing={4}>
      <Stack direction='row' spacing={2}>
        <TextField label='name' variant='outlined' />
        <TextField label='name' variant='filled' />
        <TextField label='name' variant='standard' />
      </Stack>
      <Stack direction='row' spacing={2}>
        <TextField label='small and secondary' size='small' color='secondary' />
      </Stack>
      <Stack direction='row' spacing={2}>
        <TextField
          label='form input'
          required
          error={!value}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          helperText={!value && 'required'}
        />
        <TextField
          label='password'
          type={isPasswordVisible ? 'text' : 'password'}
          helperText='password'
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton
                  onClick={() => setIsPasswordVisible((state) => !state)}
                >
                  {isPasswordVisible ? (
                    <VisibilityOffIcon />
                  ) : (
                    <VisibilityIcon />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField label='disabled' disabled />
        <TextField label='read only' InputProps={{ readOnly: true }} />
      </Stack>
      <Stack direction='row' spacing={2}>
        <TextField
          label='amount'
          InputProps={{
            startAdornment: <InputAdornment position='start'>$</InputAdornment>,
          }}
        />
        <TextField
          label='weight'
          InputProps={{
            endAdornment: <InputAdornment position='end'>kg</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
};

export { MuiTextField };
