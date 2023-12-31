import React, { useState } from 'react';
import { TextField, Box, IconButton, Grid } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import { useData } from '../Box/useData';

function Text() {
  const { setData } = useData();
  const [inputValue, setInputValue] = useState<string>('');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const handleSaveInputValue = () => {
    if (inputValue.trim() !== '') {
      setData((prevData: any) => ({
        ...prevData,
        text: inputValue,
      }));
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSaveInputValue(); // Call the save function
    }
  };
  const handleClearInput = () => {
    setInputValue('');
  };
  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };
  const handleBlur = () => {
    handleSaveInputValue();
    handleClearInput();
  };
  return (
    <Grid container spacing={2} padding={3}
      sx={{
        height: isFullscreen ? '100vh' : 'auto'
      }}>
      <Grid item xs={12} sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'lightgrey',
        padding: 1,
        marginTop: '15px'
      }}>
        <Box sx={{
          flexGrow: 1,
          margin: 2,
          backgroundColor: 'lightBlue'
        }}>
          <Box sx={{ position: 'relative' }}>
            <TextField
              fullWidth
              label="Enter text"
              variant="outlined"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              onBlur={handleBlur}
              multiline
              maxRows={isFullscreen ? 20 : 1}
            />
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                right: '40px',
                transform: 'translateY(-50%)',
                display: 'flex',
                alignItems: 'center'
              }}>
              {inputValue && (
                <IconButton aria-label="clear" onClick={handleClearInput}>
                  <ClearIcon />
                </IconButton>
              )}
              <IconButton aria-label="fullscreen" onClick={toggleFullscreen}>
                <FullscreenIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Text;

