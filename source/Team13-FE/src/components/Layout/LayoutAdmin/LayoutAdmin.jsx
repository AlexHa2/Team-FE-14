
import CategoryIcon from '@mui/icons-material/Category';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InventoryIcon from '@mui/icons-material/Inventory';
import PersonIcon from '@mui/icons-material/Person';
import ReceiptIcon from '@mui/icons-material/Receipt';
import ReportIcon from '@mui/icons-material/Report';
import SettingsIcon from '@mui/icons-material/Settings';
import { Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
export default function LayoutAdmin({ children }) {
    const navigate = useNavigate()
    const handleNavigation  = (link) => {
        navigate("/"+link)
    }
    return (

        <Container>
            <Box sx={{ display: 'flex' }}>
                <Box sx={{ width: '250px', bgcolor: '#f5f5f5', height: '100vh', paddingTop: '20px' }}>
                    <List>
                        <ListItem>
                            <ListItemText primary="Dashboard" primaryTypographyProps={{ fontWeight: 'bold', fontSize: 20 }} />
                        </ListItem>
                        <ListItem button >
                            <ListItemIcon><DashboardIcon /></ListItemIcon>
                            <ListItemText primary="Dashboard" />
                        </ListItem>
                        <ListItem button onClick={() => handleNavigation("user-table")}>
                            <ListItemIcon><PersonIcon /></ListItemIcon>
                            <ListItemText primary="Users Management" />
                        </ListItem>
                        <ListItem button onClick={() => handleNavigation('admin')}>
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
                <Box sx={{ width: '100%',height: '100vh', paddingTop: '20px' }}>
                    {children}
                </Box>
            </Box>
        </Container>
    )
}
