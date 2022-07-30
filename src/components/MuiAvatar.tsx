import { Avatar, AvatarGroup, Stack } from '@mui/material';
import { width } from '@mui/system';

const MuiAvatar = () => {
  return (
    <Stack spacing={4}>
      <Stack direction='row' spacing={1}>
        <Avatar sx={{ bgcolor: 'primary.light' }}>BW</Avatar>
        <Avatar sx={{ bgcolor: 'success.light' }}>CK</Avatar>
      </Stack>
      <Stack direction='row' spacing={1}>
        <AvatarGroup max={3}>
          <Avatar
            src='https://randomuser.me/api/portraits/women/1.jpg'
            alt='random user'
          />
          <Avatar
            src='https://randomuser.me/api/portraits/men/1.jpg'
            alt='random user'
          />
          <Avatar sx={{ bgcolor: 'primary.light' }}>BW</Avatar>
          <Avatar sx={{ bgcolor: 'success.light' }}>CK</Avatar>
        </AvatarGroup>
      </Stack>
      <Stack direction='row' spacing={1}>
        <Avatar
          variant='square'
          sx={{ bgcolor: 'primary.light', width: 48, height: 48 }}
        >
          BW
        </Avatar>
        <Avatar
          variant='rounded'
          sx={{ bgcolor: 'success.light', width: 48, height: 48 }}
        >
          CK
        </Avatar>
      </Stack>
    </Stack>
  );
};

export { MuiAvatar };
