import { LoadingButton } from '@mui/lab';
import { Stack } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';

const MuiLoadingButton = () => {
  return (
    <Stack spacing={2} direction='row'>
      <LoadingButton variant='outlined'>Submit</LoadingButton>
      <LoadingButton loading variant='outlined'>
        Submit
      </LoadingButton>
      <LoadingButton loading loadingIndicator='loading' variant='outlined'>
        Submit
      </LoadingButton>
      <LoadingButton
        loadingPosition='start'
        startIcon={<SaveIcon />}
        variant='outlined'
      >
        Submit
      </LoadingButton>
      <LoadingButton
        loading
        loadingPosition='start'
        startIcon={<SaveIcon />}
        variant='outlined'
      >
        Submit
      </LoadingButton>
    </Stack>
  );
};

export { MuiLoadingButton };
