import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Videos from '../Videos/Videos';
import * as apiService from '../../services';
import { Box, Typography } from '@mui/material';
import { Span } from '../Feed';

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();
  useEffect(() => {
    apiService
      .fetchVideos(`search?part=snippet&q=${searchTerm}`)
      .then(data => setVideos(data.items))
      .catch(console.log);
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2}>
        Search results for: <Span>{searchTerm}</Span> videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
