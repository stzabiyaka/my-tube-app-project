import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Sidebar from '../Sidebar/Sidebar';
import { Span } from './Feed.styled';
import Videos from '../Videos/Videos';

const Feed = () => {
  const copyrightYear = new Date().getFullYear();
  return (
    <Stack sx={{ flexDirection: { sm: 'column', md: 'row' } }}>
      <Box
        sx={{
          height: { sm: 'auto', md: '92vh' },
          borderRight: '1px solid #3d3d3d',
          px: { sm: 0, md: 2 },
        }}
      >
        <Sidebar />
        <Typography variant="body2" sx={{ mt: 1.5, color: 'rgba(255, 255, 255, 0.5)' }}>
          Copyright {copyrightYear} Stanislav Zabiyaka
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2}>
          New <Span>videos</Span>
        </Typography>
        <Videos videos={[]} />
      </Box>
    </Stack>
  );
};

export default Feed;
