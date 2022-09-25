import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';
import { Input } from './SearchBar.styled';

const SearchBar = () => {
  return (
    <Paper
      component="form"
      onSubmit={() => {}}
      sx={{
        borderRadius: '20px',
        border: '1px solid #e3e3e3',
        pl: 2,
        boxShadow: 'none',
        mr: { sm: 5 },
      }}
    >
      <Input placeholder="Search..." onChange={() => {}} value="" />
      <IconButton type="submit" sx={{ p: '10px', color: 'red ' }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
