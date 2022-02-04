import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MyButton from './MyButton';
import Grid from '@mui/material/Grid';

export default function SearchBar() {
  //here use useReducer for storing the value of input globally!
  let [inputVal, setInputVal] = useState("")
  return (
    <div>
      <Grid item xs={12} md={12} className='searchbox'>

        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '60ch', backgroundColor: 'White' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="Enter your email..." variant="outlined" size="small" />
        </Box>

        <div className='button-search'>
          <MyButton height={30} width={10} fontSize={19} text="Sign Up!" />
        </div>
      </Grid>
    </div>
  );
}