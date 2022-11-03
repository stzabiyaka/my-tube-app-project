import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Header, Logo } from './SharedLayout.styled';
import { icons } from '../../assets';
import SearchBar from '../SearchBar/SearchBar';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <Link to="/" title="Home">
          <Logo aria-label="logo">
            <use href={`${icons}#icon-logo`} />
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
