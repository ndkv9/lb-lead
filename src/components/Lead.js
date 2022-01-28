import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';


function Lead() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Avatar
            alt="Its me"
            variant="rounded"
            src="https://lh3.google.com/u/0/ogw/ADea4I7weFt0Z_euBRJDYIrQOD3bxFMC3USRqc-RXaRD=s83-c-mo"
            sx={{ width: 56, height: 56 }}
          />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{marginLeft: "20px"}}>
            Want more leads?
          </Typography>

          <Box
            component="form"
          >
            <FormControl color="secondary">
              <InputLabel htmlFor="component-outlined">Name</InputLabel>
              <OutlinedInput
                id="component-outlined"
                value="name"
                onChange={console.log}
                label="Name"
              />
            </FormControl>
          </Box>

          <Box
            component="form"
          >
            <FormControl color="secondary">
              <InputLabel htmlFor="component-outlined">Email</InputLabel>
              <OutlinedInput
                id="component-outlined"
                value="phone number"
                onChange={console.log}
                label="Name"
              />
            </FormControl>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Lead
