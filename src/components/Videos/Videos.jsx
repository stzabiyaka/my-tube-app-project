import VideoCard from '../VideoCard';
import ChannelCard from '../ChannelCard';
import { Stack, Box } from '@mui/material';

const Videos = ({ videos, direction = 'row' }) => {
  if (!videos?.length) return 'Loading...';
  return (
    <Stack
      direction={direction}
      flexWrap="wrap"
      alignItems={direction === 'column' ? 'center' : ''}
      gap={2}
      sx={{ justifyContent: { xs: 'center' } }}
    >
      {videos
        .filter(item => item.id.videoId || item.id.channelId)
        .map((item, indx) => (
          <Box key={indx}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channelDetail={item} />}
          </Box>
        ))}
    </Stack>
  );
};

export default Videos;
