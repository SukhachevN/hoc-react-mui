import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';
import CopyIcon from '@mui/icons-material/FileCopyOutlined';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import EditIcon from '@mui/icons-material/Edit';

const MuiSpeedDial = () => {
  return (
    <SpeedDial
      ariaLabel='navigation speed dial'
      sx={{
        position: 'absolute',
        bottom: 16,
        right: 16,
      }}
      icon={<SpeedDialIcon openIcon={<EditIcon />} />}
    >
      <SpeedDialAction icon={<CopyIcon />} tooltipOpen tooltipTitle='Copy' />
      <SpeedDialAction icon={<PrintIcon />} tooltipOpen tooltipTitle='Print' />
      <SpeedDialAction icon={<ShareIcon />} tooltipOpen tooltipTitle='Share' />
    </SpeedDial>
  );
};

export { MuiSpeedDial };
