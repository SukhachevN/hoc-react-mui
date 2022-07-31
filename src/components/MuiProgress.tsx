import { CircularProgress, LinearProgress, Stack } from '@mui/material';

const MuiProgress = () => {
  return (
    <Stack spacing={2}>
      <CircularProgress />
      <CircularProgress color='success' />
      <CircularProgress variant='determinate' value={88} />
      <LinearProgress />
      <LinearProgress color='success' />
      <LinearProgress variant='determinate' value={88} />
    </Stack>
  );
};

export { MuiProgress };
