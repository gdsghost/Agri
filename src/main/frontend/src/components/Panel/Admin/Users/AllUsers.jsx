import AllUsersTable from './AllUsersTable';
import Paper from '@mui/material/Paper';
import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

function AllUsers() {
    return (
        <div>
            <Toolbar />
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
                    <AllUsersTable />
                </Paper>
            </Box>

        </div>
    )
}

export default AllUsers
