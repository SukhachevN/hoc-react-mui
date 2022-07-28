import { Box, Divider, Grid, Paper, Stack } from '@mui/material';

const MuiLayout = () => {
  return (
    <Paper sx={{ padding: '32px' }}>
      <Stack
        direction='row'
        divider={<Divider orientation='vertical' flexItem />}
        spacing={2}
        sx={{
          border: '1px solid',
        }}
      >
        <Box
          sx={{
            backgroundColor: 'primary.main',
            color: 'white',
            height: '100px',
            width: '100px',
            padding: '16px',
            '&:hover': {
              backgroundColor: 'primary.light',
            },
          }}
        >
          Text
        </Box>
        <Box
          display='flex'
          height='100px'
          width='100px'
          bgcolor='success.light'
          p={2}
        >
          Test
        </Box>
      </Stack>
      <Grid container my={4} rowSpacing={2} columnSpacing={1}>
        <Grid item xs={6}>
          <Box bgcolor='primary.light' p={2}>
            Item 1
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor='primary.light' p={2}>
            Item 2
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor='primary.light' p={2}>
            Item 3
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor='primary.light' p={2}>
            Item 4
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export { MuiLayout };
