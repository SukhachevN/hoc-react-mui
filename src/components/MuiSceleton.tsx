import { Avatar, Skeleton, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';

const MuiSceleteon = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  return (
    <Box sx={{ width: '250px' }}>
      {isLoading ? (
        <Skeleton
          variant='rectangular'
          width={256}
          height={144}
          animation='wave'
        />
      ) : (
        <img
          src='https://source.unsplash.com/random/256x144'
          alt='skeleton'
          width={256}
          height={144}
        />
      )}
      <Stack
        direction='row'
        spacing={1}
        sx={{ width: '100%', marginTop: '12px' }}
      >
        {isLoading ? (
          <Skeleton
            variant='circular'
            width={40}
            height={40}
            animation='wave'
          />
        ) : (
          <Avatar>V</Avatar>
        )}
        <Stack sx={{ width: '80%' }}>
          {isLoading ? (
            <>
              <Typography variant='body1'>
                <Skeleton variant='text' width='100%' animation='wave' />
              </Typography>
              <Typography variant='body2'>
                <Skeleton variant='text' width='100%' animation='wave' />
              </Typography>
            </>
          ) : (
            <>
              <Typography variant='body1'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Typography>
            </>
          )}
        </Stack>
      </Stack>
    </Box>
  );
};

export { MuiSceleteon };
