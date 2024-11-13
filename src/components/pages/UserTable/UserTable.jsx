import React, { useState, useEffect } from 'react';
import { Avatar, Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import axios from 'axios';

const API_URL = 'https://6721469298bbb4d93ca804a9.mockapi.io/users';

function UserTable() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(API_URL);
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>Search for something to barter</Typography>
      <TableContainer component={Paper} sx={{ maxWidth: 900, margin: 'auto' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left"><strong>User</strong></TableCell>
              <TableCell align="left"><strong>First name</strong></TableCell>
              <TableCell align="left"><strong>Number of Exchanges</strong></TableCell>
              <TableCell align="left"><strong>VatNo.</strong></TableCell>
              <TableCell align="left"><strong>Created</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell align="left">
                  <Avatar src={user.avatar} alt={user.name} sx={{ width: 40, height: 40 }} />
                </TableCell>
                <TableCell align="left">{user.name}</TableCell>
                <TableCell align="left">{user.exchanges}</TableCell>
                <TableCell align="left">{user.vatNo}</TableCell>
                <TableCell align="left">{user.createdDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default UserTable;
