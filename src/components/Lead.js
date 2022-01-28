import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  bar: {
    backgroundColor: "#000",
  },
  field: {
    backgroundColor: "#FFF",
    color: "#FFF",
    marginLeft: "30px",
    marginRight: "30px"
  },
  cancelBtn: {
    marginLeft: "30px"
  }
})


function Lead() {
  const classes = useStyles()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className={classes.bar}>
          <Avatar
            alt="Its me"
            variant="rounded"
            src="https://stripe-images.s3.us-west-1.amazonaws.com/works-with/0bf92fa8419e3237a6fb6eac9b1c225099f96741"
            sx={{ width: 56, height: 56 }}
          />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{marginLeft: "20px"}}>
            Want more leads? Try our bots and forms
          </Typography>

          <Box
            component="form"
          >
            <FormControl className={classes.field}>
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
            <FormControl className={classes.field}>
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
