import { DatePicker, TimePicker, DateTimePicker } from '@mui/x-date-pickers';
import { Stack, TextField } from '@mui/material';
import { useState } from 'react';

const MuiPicker = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);
  const [selectedDateTime, setSelectedDateTime] = useState<Date | null>(null);

  return (
    <Stack spacing={4} sx={{ width: '250px' }}>
      <DatePicker
        label='date picker'
        renderInput={(params) => <TextField {...params} />}
        value={selectedDate}
        onChange={(newVal) => setSelectedDate(newVal)}
      />
      <TimePicker
        label='time picker'
        renderInput={(params) => <TextField {...params} />}
        value={selectedTime}
        onChange={(newVal) => setSelectedTime(newVal)}
      />
      <DateTimePicker
        label='date time picker'
        renderInput={(params) => <TextField {...params} />}
        value={selectedDateTime}
        onChange={(newVal) => setSelectedDateTime(newVal)}
      />
    </Stack>
  );
};

export { MuiPicker };
