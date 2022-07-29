import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material';
import { useState } from 'react';

const MuiAccordion = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  return (
    <div>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={(_, val) => setExpanded(val && 'panel1')}
      >
        <AccordionSummary
          id='panel1-header'
          aria-controls='panel1-content'
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi totam
            ad eveniet expedita, consequatur porro repellat repudiandae nostrum
            aut numquam ipsa molestiae distinctio quibusdam eum corporis est
            laboriosam quos nesciunt!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel2'}
        onChange={(_, val) => setExpanded(val && 'panel2')}
      >
        <AccordionSummary
          id='panel2-header'
          aria-controls='panel2-content'
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi totam
            ad eveniet expedita, consequatur porro repellat repudiandae nostrum
            aut numquam ipsa molestiae distinctio quibusdam eum corporis est
            laboriosam quos nesciunt!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel3'}
        onChange={(_, val) => setExpanded(val && 'panel3')}
      >
        <AccordionSummary
          id='panel3-header'
          aria-controls='panel3-content'
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi totam
            ad eveniet expedita, consequatur porro repellat repudiandae nostrum
            aut numquam ipsa molestiae distinctio quibusdam eum corporis est
            laboriosam quos nesciunt!
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export { MuiAccordion };
