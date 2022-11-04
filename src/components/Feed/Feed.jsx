import { useState, useEffect } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Videos from '../Videos/Videos';
import * as apiService from '../../services';
import { Box, Stack, Typography } from '@mui/material';
import { Span } from './Feed.styled';

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    apiService
      .fetchVideos(`search?part=snippet&q=${selectedCategory}`)
      .then(data => setVideos(data.items));
  }, [selectedCategory]);

  const copyrightYear = new Date().getFullYear();
  return (
    <Stack sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
      <Box
        sx={{
          height: { sm: 'auto', md: '92vh' },
          borderRight: '1px solid #3d3d3d',
          px: { sm: 0, md: 2 },
        }}
      >
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <Typography
          variant="body2"
          sx={{
            position: { xs: 'fixed', md: 'static' },
            bottom: '10px',
            left: '20px',
            mt: 1.5,
            color: 'rgba(255, 255, 255, 0.5)',
          }}
        >
          &copy; Copyright {copyrightYear} Zabiyaka Studio
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2}>
          {selectedCategory} <Span>videos</Span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
