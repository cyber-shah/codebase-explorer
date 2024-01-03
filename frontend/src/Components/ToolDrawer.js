import { Box, Paper } from '@mui/material';
import React from 'react';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import { Container, Typography, Button, TextField } from '@mui/material';
import { useState } from 'react';


export default function ToolDrawer(props) {

  const [currentDirectory, setCurrentDirectory] = useState('/');


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
    </Paper>

  );
}
