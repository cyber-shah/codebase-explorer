import { Box, Divider, FormControl, InputLabel, MenuItem, Paper, Select, Stack } from '@mui/material';
import React from 'react';
import { Container, Typography, Button, TextField } from '@mui/material';
import { useState } from 'react';
import InputSlider from './ToolDrawer/Slider';



export default function ToolDrawer(props) {

  const [currentDirectory, setCurrentDirectory] = useState('/');
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Paper elevation={3}>
      <Container>
        <TextField
          label="Current Directory"
          fullWidth
          size='small'
          margin="normal"
        />
        <Button variant="contained" component="label">
          Select Files
        </Button>
      </Container>

      <Divider />

      <Box sx={{
        width: '90%',
        margin: 'auto',
        display: 'flex',
        alignItems: 'center'
      }}>
        <Stack>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Tree Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Directory Tree"
              onChange={handleChange}
            >
              <MenuItem value={0}>Directory Tree</MenuItem>
              <MenuItem value={1}>Dependency Tree</MenuItem>
              <MenuItem value={2}> Resource Tree </MenuItem>
            </Select>
          </FormControl>

          <InputSlider name='Node Size' />


          <InputSlider name='Gap - X' />

          < InputSlider name='Gap - Y' />

          < InputSlider name='Link Color' />
        </Stack>

      </Box>

      < Divider />
    </Paper >

  );
}
