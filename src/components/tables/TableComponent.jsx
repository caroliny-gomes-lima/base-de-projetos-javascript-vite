import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

function tableComponent() {
  const tableDataMock = [
    {
      id: 1,
      name: "John Doe",
      age: 30,
      email: "kZV7M@example.com",
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 25,
      email: "Bx5r8@example.com",
    },
    {
      id: 3,
      name: "Alice Johnson",
      age: 28,
      email: "Bx5r8@example.com",
    },
    {
      id: 4,
      name: "Bob Brown",
      age: 32,
      email: "Bx5r8@example.com",
    },
    {
      id: 5,
      name: "Charlie White",
      age: 27,
      email: "Bx5r8@example.com",
    },
    {
      id: 6,
      name: "Diana Green",
      age: 29,
      email: "Bx5r8@example.com",
    },
  ];

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableDataMock.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.age}</TableCell>
              <TableCell>{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default tableComponent;
