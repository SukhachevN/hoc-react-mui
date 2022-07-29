import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

const MuiCard = () => {
  return (
    <Box width='300px'>
      <Card>
        <CardMedia
          component='img'
          height='140'
          image='https://source.unsplash.com/random'
          alt='random img'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            React
          </Typography>
          <Typography gutterBottom variant='body2' color='text.secondary'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
            quisquam sunt esse labore tenetur. Harum repudiandae minima fuga
            libero numquam, deserunt suscipit voluptatum optio aliquam quisquam
            quidem ab maxime nobis?
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small'>Share</Button>
          <Button size='small'>Learn more</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export { MuiCard };
