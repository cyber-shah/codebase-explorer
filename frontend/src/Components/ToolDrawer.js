import { Box, Divider, FormControl, InputLabel, MenuItem, Paper, Select, Stack } from '@mui/material';
import React from 'react';
import { Container, Typography, Button, TextField } from '@mui/material';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Slider from '@mui/material/Slider';
import { HuePicker } from 'react-color';

export default function ToolDrawer(props) {

  const [currentDirectory, setCurrentDirectory] = useState('/');
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Paper elevation={3} sx={{ width: '100%' }} >

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


          <Typography id="input-slider" gutterBottom>
            Text Size
          </Typography>
          <Box sx={{ display: 'flex', width: '100%' }} >
            <Button
              variant="outlined"
              fullWidth
              endIcon={<AddIcon />}
              onClick={() => {
                props.setTextSize(props.textSize + 1);
                console.log(props.textSize);
              }}
            />

            <Button
              variant="outlined"
              fullWidth
              endIcon={<RemoveIcon />}
              onClick={() => {
                props.setTextSize(props.textSize - 1);
                console.log(props.textSize);
              }}
            />
          </Box>



          <Typography gutterBottom>
            Horizontal Spacing
          </Typography>
          <Box sx={{ display: 'flex', width: '100%' }} >
            <Slider
              aria-label="Temperature"
              defaultValue={30}
              valueLabelDisplay="auto"
              step={20}
              marks
              min={100}
              max={400}
              onChange={(e) => {
                props.setdx(e.target.value);
              }}
            />
          </Box>


          <Typography gutterBottom>
            Vertical Spacing
          </Typography>
          <Box sx={{ display: 'flex', width: '100%' }} >
            <Slider
              aria-label="Temperature"
              defaultValue={30}
              valueLabelDisplay="auto"
              step={5}
              marks
              min={10}
              max={100}
              onChange={(e) => {
                props.setdy(e.target.value);
              }}
            />
          </Box>




        </Stack>

      </Box>

      < Divider />

      < HuePicker
        onChange={(color) => {
          props.setNodeColor(color.hex);
          props.setLinkColor(color.hex);
        }}
        onChangeComplete={(color) => {
          props.setNodeColor(color.hex);
          props.setLinkColor(color.hex);
        }} />



    </Paper >

  );
}
