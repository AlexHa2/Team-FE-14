// src/components/pages/AdminPage.jsx
import React, { useEffect, useState } from 'react';
import tableData from '../../../DataList/AdminData/AdminData.jsx';
import { Box, Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox } from '@mui/material';

const AdminPage = () => {
    const [showItemsList, setShowItemsList] = useState(false);

    useEffect(() => {
        // Tự động bật showItemsList khi trang tải
        setShowItemsList(true);
    }, []);

    return (
        <Box>
            <Container>
                {showItemsList && (
                    <>
                        <Typography variant="h4" gutterBottom sx={{ marginTop: 3 }}>Items List Information sss</Typography>

                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell padding="checkbox">
                                            <Checkbox />
                                        </TableCell>
                                        <TableCell>Items ID</TableCell>
                                        <TableCell>Date</TableCell>
                                        <TableCell>Customer</TableCell>
                                        <TableCell>Payable Amount</TableCell>
                                        <TableCell>Paid Amount</TableCell>
                                        <TableCell>Due</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {tableData.map((item) => (
                                        <TableRow key={item.id}>
                                            <TableCell padding="checkbox">
                                                <Checkbox />
                                            </TableCell>
                                            <TableCell>{item.itemsID}</TableCell>
                                            <TableCell>{item.date}</TableCell>
                                            <TableCell>{item.customer}</TableCell>
                                            <TableCell>{item.payableAmount.toFixed(2)}</TableCell>
                                            <TableCell>{item.paidAmount.toFixed(2)}</TableCell>
                                            <TableCell>{item.due.toFixed(2)}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </>
                )}
            </Container>
        </Box>
    );
};

export default AdminPage;