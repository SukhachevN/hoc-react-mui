import { Alert, AlertProps, Button, Snackbar } from '@mui/material';
import { forwardRef, useState } from 'react';

const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>((props, ref) => (
  <Alert elevation={6} ref={ref} {...props} />
));

const MuiSnackbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Submit</Button>
      {/* <Snackbar
        message='form submitted'
        autoHideDuration={4000}
        open={isOpen}
        onClose={() => setIsOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      /> */}
      <Snackbar open={isOpen} autoHideDuration={2000} onClose={handleClose}>
        <SnackbarAlert onClose={handleClose} severity='success'>
          Form submitted
        </SnackbarAlert>
      </Snackbar>
    </>
  );
};

export { MuiSnackbar };
