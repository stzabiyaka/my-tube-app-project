import { Stack } from '@mui/material';
import { categories } from '../../utilities/constants';
import { Button } from './Sidebar.styled';

const Sidebar = () => {
  const selectedCategory = 'New';
  return (
    <Stack
      direction="row"
      sx={{ overflowY: 'auto', height: { sm: 'auto', md: '95%' }, flexDirection: { md: 'column' } }}
    >
      {categories.map(({ name, icon }) => (
        <Button selected={name === selectedCategory} key={name}>
          <span className="button__icon">{icon}</span>
          <span className="button__label">{name}</span>
        </Button>
      ))}
    </Stack>
  );
};

export default Sidebar;
