import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

interface TableData {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  ipAddress: string;
}

const tableData: TableData[] = [
  {
    id: 1,
    firstName: 'Beret',
    lastName: 'Lennard',
    email: 'blennard0@pcworld.com',
    gender: 'Female',
    ipAddress: '213.196.192.52',
  },
  {
    id: 2,
    firstName: 'Tera',
    lastName: 'Choke',
    email: 'tchoke1@theatlantic.com',
    gender: 'Male',
    ipAddress: '101.152.241.70',
  },
  {
    id: 3,
    firstName: 'Lyn',
    lastName: 'Bowart',
    email: 'lbowart2@odnoklassniki.ru',
    gender: 'Male',
    ipAddress: '188.127.126.94',
  },
  {
    id: 4,
    firstName: 'Bert',
    lastName: 'Huckett',
    email: 'bhuckett3@tinypic.com',
    gender: 'Female',
    ipAddress: '247.156.243.148',
  },
  {
    id: 5,
    firstName: 'Drew',
    lastName: 'Jenicke',
    email: 'djenicke4@businessinsider.com',
    gender: 'Male',
    ipAddress: '0.185.35.172',
  },
  {
    id: 6,
    firstName: 'Deloria',
    lastName: 'Pepperill',
    email: 'dpepperill5@meetup.com',
    gender: 'Non-binary',
    ipAddress: '101.44.39.120',
  },
  {
    id: 7,
    firstName: 'Spense',
    lastName: 'Ivashnyov',
    email: 'sivashnyov6@hexun.com',
    gender: 'Female',
    ipAddress: '253.192.252.49',
  },
  {
    id: 8,
    firstName: 'Elden',
    lastName: 'Chaucer',
    email: 'echaucer7@mozilla.com',
    gender: 'Agender',
    ipAddress: '60.70.120.186',
  },
  {
    id: 9,
    firstName: 'Sholom',
    lastName: 'Deetch',
    email: 'sdeetch8@so-net.ne.jp',
    gender: 'Female',
    ipAddress: '218.36.95.147',
  },
  {
    id: 10,
    firstName: 'Genovera',
    lastName: 'Colby',
    email: 'gcolby9@dagondesign.com',
    gender: 'Non-binary',
    ipAddress: '199.140.221.248',
  },
];
const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: '300px' }}>
      <Table aria-label='simple table' stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>First name</TableCell>
            <TableCell>Last name</TableCell>
            <TableCell align='center'>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map(({ id, firstName, lastName, email }) => (
            <TableRow
              key={id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{id}</TableCell>
              <TableCell>{firstName}</TableCell>
              <TableCell>{lastName}</TableCell>
              <TableCell align='center'>{email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export { MuiTable };
