import { Alert, AlertTitle, Button, Stack } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

const MuiAlert = () => {
  return (
    <Stack spacing={2}>
      <Alert severity='error' onClose={() => alert('closed')}>
        <AlertTitle>Error</AlertTitle>
        Error
      </Alert>
      <Alert severity='success' action={<Button>Undo</Button>}>
        <AlertTitle>Success</AlertTitle>
        Success
      </Alert>
      <Alert severity='warning'>Warning</Alert>
      <Alert severity='info'>Info</Alert>
      <Alert variant='outlined' severity='error'>
        Error
      </Alert>
      <Alert variant='outlined' severity='success'>
        Success
      </Alert>
      <Alert variant='outlined' severity='warning'>
        Warning
      </Alert>
      <Alert variant='outlined' severity='info'>
        Info
      </Alert>
      <Alert variant='filled' severity='error'>
        Error
      </Alert>
      <Alert variant='filled' severity='success' icon={<CheckIcon />}>
        Success
      </Alert>
      <Alert variant='filled' severity='warning'>
        Warning
      </Alert>
      <Alert variant='filled' severity='info'>
        Info
      </Alert>
    </Stack>
  );
};

export { MuiAlert };
