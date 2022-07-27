import {
  Button,
  ButtonGroup,
  IconButton,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import React, { useState } from 'react';

const MuiButton = () => {
  const [format, setFormat] = useState<string | null>(null);

  const handleFormatChange = (
    e: React.MouseEvent<HTMLElement>,
    updatedFormat: string
  ) => setFormat(updatedFormat);

  console.log({ format });

  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction='row'>
        <Button variant='text' href='https://google.com'>
          text
        </Button>
        <Button variant='outlined'>outlined</Button>
        <Button variant='contained'>contained</Button>
      </Stack>
      <Stack spacing={2} direction='row'>
        <Button variant='contained' color='primary'>
          contained
        </Button>
        <Button variant='contained' color='secondary'>
          contained
        </Button>
        <Button variant='contained' color='error'>
          contained
        </Button>
        <Button variant='contained' color='warning'>
          contained
        </Button>
        <Button variant='contained' color='success'>
          contained
        </Button>
      </Stack>
      <Stack display='block' spacing={2} direction='row'>
        <Button variant='contained' size='small'>
          Small
        </Button>
        <Button variant='contained' size='medium'>
          Medium
        </Button>
        <Button variant='contained' size='large'>
          Large
        </Button>
      </Stack>
      <Stack spacing={2} direction='row'>
        <Button
          variant='contained'
          startIcon={<SendIcon />}
          disableRipple
          onClick={() => console.log('clicked')}
        >
          Send
        </Button>
        <Button variant='contained' endIcon={<SendIcon />} disableElevation>
          Send
        </Button>
        <IconButton aria-label='send' color='error' size='large'>
          <SendIcon />
        </IconButton>
      </Stack>
      <Stack direction='row'>
        <ButtonGroup
          variant='contained'
          orientation='vertical'
          size='small'
          color='secondary'
          aria-label='alignment button group'
        >
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
      <Stack direction='row'>
        <ToggleButtonGroup
          aria-label='text formatting'
          value={format}
          onChange={handleFormatChange}
          size='large'
          color='success'
          exclusive
        >
          <ToggleButton value='bold' aria-label='bold'>
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value='italic' aria-label='italic'>
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value='underlined' aria-label='underlined'>
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};

export { MuiButton };
