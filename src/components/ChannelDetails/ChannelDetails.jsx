import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as apiService from '../../services';
import Videos from '../Videos';
import ChannelCard from '../ChannelCard';
import { Box } from '@mui/material';

const ChannelDetails = () => {
  const [channelDetails, setChannelDetails] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    apiService
      .fetchVideos(`channels?part=snippet&id=${id}`)
      .then(data => setChannelDetails({ ...data?.items[0], id: { channelId: id } }))
      .catch(console.log);

    apiService
      .fetchVideos(`search?channelId=${id}&part=snippet&order=date`)
      .then(data => setVideos(data?.items))
      .catch(console.log);
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              'linear-gradient(90deg, rgba(3,132,177,1) 0%, rgba(9,100,121,1) 35%, rgba(255,0,22,1) 100%)',
            zIndex: 10,
            height: '200px',
          }}
        />
        <ChannelCard channelDetail={channelDetails} marginTop="-90px" />
      </Box>
      <Box display="flex" p={2} pb={4}>
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetails;
