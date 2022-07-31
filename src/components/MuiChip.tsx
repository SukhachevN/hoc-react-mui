import { Avatar, Chip, Stack } from '@mui/material';
import FaceIcon from '@mui/icons-material/Face';
import { useState } from 'react';

const MuiChip = () => {
  const [chips, setChips] = useState<string[]>(['1', '2', '3']);

  return (
    <Stack direction='row' spacing={1}>
      <Chip label='chip' color='primary' icon={<FaceIcon />} />
      <Chip
        label='chip'
        color='secondary'
        size='small'
        variant='outlined'
        avatar={<Avatar>V</Avatar>}
      />
      <Chip
        label='Click'
        onClick={() => console.log('click')}
        color='success'
      />
      <Chip
        label='Delete'
        onClick={() => console.log('click')}
        onDelete={() => console.log('delete')}
        color='error'
      />
      {chips.map((chip) => (
        <Chip
          label={chip}
          onDelete={() =>
            setChips((state) => state.filter((val) => val !== chip))
          }
        />
      ))}
    </Stack>
  );
};

export { MuiChip };
