import { Routes, Route } from 'react-router-dom';
import { AppContainer } from './App.styled';

const App = () => {
  return (
    <AppContainer>
      AppBar
      <Routes>
        <Route path="/" exact element={<div>Feed</div>}></Route>;
      </Routes>
      Footer
    </AppContainer>
  );
};

export default App;
