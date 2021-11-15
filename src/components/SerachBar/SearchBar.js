import { useSelector, useDispatch } from 'react-redux';
import { styled, alpha } from '@mui/material/styles';
import { InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import contactsSelectors from 'redux/contacts/contacts-selectors';
import contactsOperations from 'redux/contacts/contacts-operaions';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
  },
}));

export default function SearchBar() {
  const searchQuery = useSelector(contactsSelectors.getFilter);
  const contacts = useSelector(contactsSelectors.getContacts);
  const dispatch = useDispatch();

  const onSearch = e => {
    const { value } = e.target;
    dispatch(contactsOperations.changeFilter(value));
  };
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder={`Contacts: ${contacts.length}`}
        inputProps={{ 'aria-label': 'search' }}
        onChange={onSearch}
        value={searchQuery}
      />
    </Search>
  );
}
