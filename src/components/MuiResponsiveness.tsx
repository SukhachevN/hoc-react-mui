import { Box } from '@mui/material';
import { styled } from '@mui/material';

const StyledBox = styled(Box)(({ theme }) => ({
  height: '250px',
  width: '250px',
  background: theme.palette.neutral?.darker,
}));

const MuiResponsiveness = () => {
  return (
    <>
      <StyledBox></StyledBox>
      <Box
        sx={{
          height: '300px',
          width: {
            xs: 100,
            sm: 200,
            md: 300,
            lg: 400,
            xl: 500,
          },
          bgcolor: 'secondary.light',
        }}
      ></Box>
    </>
  );
};

export { MuiResponsiveness };
