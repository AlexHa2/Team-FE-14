
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
export default function LayoutAdmin({children}) {
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
                    <ListItem button >
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
            <Box>
                {children}
            </Box>
    </Box>
  )
}
