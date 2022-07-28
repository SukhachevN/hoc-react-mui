import { Rating, Stack } from '@mui/material';
import FavouriteIcon from '@mui/icons-material/Favorite';
import FavouriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useState } from 'react';

const MuiRating = () => {
  const [rating, setRating] = useState(0);

  console.log({ rating });

  return (
    <Stack spacing={2}>
      <Rating
        value={rating}
        onChange={(_, value) => setRating(value || 0)}
        precision={0.5}
        size='large'
        icon={<FavouriteIcon />}
        emptyIcon={<FavouriteBorderIcon />}
        highlightSelectedOnly
      />
    </Stack>
  );
};

export { MuiRating };
