import { Masonry } from '@mui/lab';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Paper,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const heights = [150, 23, 20, 90, 89, 43, 22, 50, 60, 40, 20, 110, 89];

const MuiMasonry = () => {
  return (
    <Box sx={{ width: '500px', minHeight: '400px' }}>
      {
        <Masonry columns={4} spacing={1}>
          {heights.map((height, index) => (
            <Paper
              key={index}
              sx={{
                border: '1px solid',
              }}
            >
              <Accordion sx={{ minHeight: height }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Accordion {index + 1}</Typography>
                </AccordionSummary>
                <AccordionDetails></AccordionDetails>
              </Accordion>
            </Paper>
          ))}
        </Masonry>
      }
    </Box>
  );
};

export { MuiMasonry };
