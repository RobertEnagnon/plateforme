import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import Button from "@mui/material/Button";
import {Home as HomeIcon, Search as SearchIcon, Movie as MovieIcon, Grade as GradeIcon, 
      PersonAddAlt1 as PersonAddAlt1Icon, Login as LoginIcon, WorkspacePremium as WorkspacePremiumIcon,
      TipsAndUpdates as TipsAndUpdatesIcon
    } from '@mui/icons-material';


import './Topbar.css'
import { Link } from 'react-router-dom';
import { Divider, Stack } from '@mui/material';

import Logo from "../../assets/images/white-logo.jpg";


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
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
      [theme.breakpoints.up('sm')]: {
        width: '15ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

const Topbar = () => {
  return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static"  sx={{backgroundColor: `#108643`}}>
              <Toolbar className='toolbar'>
                  <Link
                      to='/'
                      color="inherit"
                  >
                      <Button  className="logo" sx={{fontSize:'25px',color:'white'}} > 
                        <img src={Logo} alt="logo ronasdev" width={50} height={50} /> Ronasdev
                      </Button>
                  </Link>
                  <Stack className="navbar" direction={'row'} spacing={1}>
                      <Link to="/" className='link'>
                          <Stack direction={'row'} spacing={1} ><HomeIcon/><span>Accueil</span></Stack>
                      </Link>
                      <Link to="/tutoriels" className='link'>
                          <Stack direction='row' spacing={1}><MovieIcon/><span>Tutoriels</span></Stack>
                      </Link> 
                      <Link to="/formations" className='link'>
                          <Stack direction='row' spacing={1}><TipsAndUpdatesIcon/><span>Formations</span></Stack>
                      </Link>
                      <Link to="/premium" className='link'>
                          <Stack direction='row' spacing={1}><GradeIcon/><span>Premium</span></Stack>
                      </Link>
                      <Link to="/projets" className='link'>
                          <Stack direction='row' spacing={1}><WorkspacePremiumIcon/><span>Projets</span></Stack>
                      </Link>
                  </Stack>
                  
                  <Stack direction='row' className="compte" divider={<Divider orientation="vertical" flexItem light={true}
                     sx={{borderColor: 'white'}}  />} spacing={1}  >
                    <Search>
                        <SearchIconWrapper>
                        <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Rechercher ..."
                            inputProps={{ 'aria-label': 'search' }}
                            />
                    </Search>
                    <Link to="/"  className='link'>
                      <Stack direction='row' spacing={1}><PersonAddAlt1Icon/><span>S'inscrire</span></Stack>
                    </Link>
                    <Link to="/" className='link'>
                      <Stack direction='row' spacing={1}><LoginIcon/><span>Se connecter</span></Stack>
                    </Link>
                  </Stack>
              </Toolbar>
          </AppBar>
        </Box>
  )
}

export default Topbar

/**
 *  <Search>
                <SearchIconWrapper>
                <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                />
            </Search>
 */