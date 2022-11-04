import { Link } from 'react-router-dom';
import { Box, Typography, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoProfilePicture, demoChannelTitle } from '../../utilities/constants';

const ChannelCard = ({ channelDetail, marginTop, noLink }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        width: { xs: '90vw', md: '320px' },
        height: '326px',
        margin: 'auto',
        marginTop,
        boxShadow: 'none',
        borderRadius: '20px',
      }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            color: '#ffffff',
          }}
        >
          <CardMedia
            image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
            alt={channelDetail?.snippet?.title}
            sx={{
              borderRadius: '50%',
              width: '180px',
              height: '180px',
              mb: 2,
              border: '1px solid #e3e3e3',
            }}
          />
          <Typography variant="h6">
            {channelDetail?.snippet?.title || demoChannelTitle}
            <CheckCircle sx={{ fontSize: 14, color: '#808080', ml: '5px' }} />
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography color="#808080">
              {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
