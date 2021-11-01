import Paper from '@mui/material/Paper';
import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import AllInventoryTable from './AllInventoryTable';
import InventoryForm from './InventoryForm';

function AllInventory() {
    return (
        <div>
        <Toolbar />
        <div style={{backgroundColor: '#060b26', width: '200px',textAlign:'center'}}><InventoryForm/></div>

        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 5,
                    width: 900,
                    height: 128,
                },
            }}
        >
            <Paper elevation={3} >
            <AllInventoryTable/>
            </Paper>
        </Box>
    </div>
    )
}

export default AllInventory
