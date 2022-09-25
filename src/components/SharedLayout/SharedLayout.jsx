import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Header, Logo } from './SharedLayout.styled';
import { logo } from '../../utilities/constants';
import SearchBar from '../SearchBar/SearchBar';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <Link to="/" title="Home">
          <Logo aria-label="logo">
            <use href={`${logo}#icon-logo`} />
          </Logo>
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
