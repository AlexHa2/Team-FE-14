
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems } from '../../redux/slice/itemsSlice';
import { useState } from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import InventoryIcon from '@mui/icons-material/Inventory';
import ReceiptIcon from '@mui/icons-material/Receipt';
import ReportIcon from '@mui/icons-material/Report';
import CategoryIcon from '@mui/icons-material/Category';
import SettingsIcon from '@mui/icons-material/Settings';
import { Box, Container, Typography, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox, IconButton, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
const AdminPage = () => {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.items.items);
    const itemsStatus = useSelector((state) => state.items.status);
    const [showItemsList, setShowItemsList] = useState(false);

    const handleItemManagementClick = () => {
        setShowItemsList(true);
        if (itemsStatus === 'idle') {
            dispatch(fetchItems());
        }
    };


    return (
        <Box sx={{ display: 'flex' }}>
            
            <Box sx={{ width: '250px', bgcolor: '#f5f5f5', height: '100vh', paddingTop: '20px' }}>
            <List>
                    <ListItem>
                        <ListItemText primary="Dashboard" primaryTypographyProps={{ fontWeight: 'bold', fontSize: 20 }} />
                    </ListItem>
                    <ListItem button onClick={() => handleNavigation('dashboard')}>
                        <ListItemIcon><DashboardIcon /></ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItem>
                    <ListItem button onClick={() => handleNavigation('users')}>
                        <ListItemIcon><PersonIcon /></ListItemIcon>
                        <ListItemText primary="Users Management" />
                    </ListItem>
                    <ListItem button onClick={handleItemManagementClick}>
                        <ListItemIcon><InventoryIcon /></ListItemIcon>
                        <ListItemText primary="Item Management" />
                        </ListItem>
                    <ListItem button onClick={() => handleNavigation('transactions')}>
                        <ListItemIcon><ReceiptIcon /></ListItemIcon>
                        <ListItemText primary="Transaction Management" />
                    </ListItem>
                    <ListItem button onClick={() => handleNavigation('reports')}>
                        <ListItemIcon><ReportIcon /></ListItemIcon>
                        <ListItemText primary="Report & Complaint Management" />
                    </ListItem>
                    <ListItem button onClick={() => handleNavigation('categories')}>
                        <ListItemIcon><CategoryIcon /></ListItemIcon>
                        <ListItemText primary="Category & Tag Management" />
                    </ListItem>
                    <ListItem button onClick={() => handleNavigation('settings')}>
                        <ListItemIcon><SettingsIcon /></ListItemIcon>
                        <ListItemText primary="Settings" />
                    </ListItem>
                </List>
            </Box>

            
            <Container>
                {showItemsList && (
                    <>
                        <Typography variant="h4" gutterBottom sx={{ marginTop: 3 }}>Items List Information</Typography>
                        
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
                                    {items.map((item) => (
                                        <TableRow key={item.id}>
                                            <TableCell padding="checkbox">
                                                <Checkbox />
                                            </TableCell>
                                            <TableCell>{item.itemsID}</TableCell>
                                            <TableCell>{item.date}</TableCell>
                                            <TableCell>{item.customer}</TableCell>
                                            <TableCell>{item.payableAmount}</TableCell>
                                            <TableCell>{item.paidAmount}</TableCell>
                                            <TableCell>{item.due}</TableCell>
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
