import { Outlet } from 'react-router-dom';
import { Header, Link, Logo } from './SharedLayout.styled';
import { logo } from '../../utilities/constants';
import SearchBar from '../SearchBar/SearchBar';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <Link to="/">
          <Logo src={logo} alt="logo" />
        </Link>
        <SearchBar />
      </Header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default SharedLayout;
