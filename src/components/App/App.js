import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from '../SharedLayout';
import BackScrollButton from '../BackScrollButton/BackScrollButton';
import { AppContainer } from './App.styled';

const Feed = lazy(() => import('../Feed'));
const VideoDetails = lazy(() => import('../VideoDetails'));
const ChannelDetails = lazy(() => import('../ChannelDetails'));
const SearchFeed = lazy(() => import('../SearchFeed'));

const App = () => {
  return (
    <AppContainer>
      <Suspense>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Feed />} />
            <Route path="/video/:id" element={<VideoDetails />} />
            <Route path="/channel/:id" element={<ChannelDetails />} />
            <Route path="/search/:searchTerm" element={<SearchFeed />} />
          </Route>
        </Routes>
      </Suspense>
      {/* <BackScrollButton /> */}
    </AppContainer>
  );
};

export default App;
