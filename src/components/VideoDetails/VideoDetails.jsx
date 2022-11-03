import { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { Link, useParams } from 'react-router-dom';
import Videos from '../Videos';
import * as apiService from '../../services';
import { Typography, Box, Stack } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

const VideoDetails = () => {
  const [videoDetails, setVideoDetails] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    apiService
      .fetchVideos(`videos?part=snippet,statistics&id=${id}`)
      .then(data => {
        console.log(data);
        setVideoDetails(data.items[0]);
      })
      .catch(console.log);

    apiService
      .fetchVideos(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then(data => {
        console.log(data);
        setVideos(data.items);
      })
      .catch(console.log);
  }, [id]);

  if (!videoDetails?.snippet) return 'Loading...';

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetails;

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box flex={1}>
          <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              height="77vh"
              width="100%"
              controls
            />
            <Typography variant="h5" color="#ffffff" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: '#ffffff' }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography variant={{ sm: 'subtitle1', md: 'h6' }} color="#ffffff">
                  {channelTitle}
                  <CheckCircle sx={{ fontSize: '12px', color: '#808080', ml: '5px' }} />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box px={2} py={{ xs: 5, md: 1 }} justifyContent="center">
          <Videos videos={videos} direction={'column'} />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetails;
