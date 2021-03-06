import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { styled, alpha } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { AppBar, Box, Toolbar, IconButton, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';

// Actions
import { sportsActions } from '../../store/actions';

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
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const useStyles = makeStyles(() => ({
  logo: {
    maxHeight: '100%',
    maxWidth: '200px'
  }
}));

const Header = ({ setToggleDrawer }) => {
  const classes = useStyles();
  const { allSports } = useSelector((state) => state.sportsState);
  const dispatch = useDispatch();
  const { changeSportsState } = bindActionCreators(
    sportsActions,
    dispatch
  );

  const handleSearchSport = (e) => {
    const matches = allSports.matches.filter(match => match.sport.toLowerCase().includes(e.target.value.toLowerCase()))
    changeSportsState({ ...allSports, matches });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{ backgroundColor: '#757de8' }} position="static">
        <Toolbar>
          <img className={classes.logo} src='https://ultraplay.co/wp-content/themes/UltraPlay/images/up_logo.png' alt='logo' />
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search???"
              inputProps={{ 'aria-label': 'search' }}
              onChange={handleSearchSport}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              onClick={() => setToggleDrawer(true)}
            >
              <AccountCircle fontSize="large" />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;