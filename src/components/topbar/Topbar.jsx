  import { useState } from 'react';
  // import { styled, alpha } from '@mui/material/styles';
  import AppBar from '@mui/material/AppBar';
  import Box from '@mui/material/Box';
  import Toolbar from '@mui/material/Toolbar';
  // import InputBase from '@mui/material/InputBase';
  import Button from "@mui/material/Button";
  import MenuIcon from '@mui/icons-material/Menu';
  import "./Topbar.css"
  import {
    Home as HomeIcon,
    // Search as SearchIcon,
    Movie as MovieIcon,
    Grade as GradeIcon,
    PersonAddAlt1 as PersonAddAlt1Icon,
    Login as LoginIcon,
    WorkspacePremium as WorkspacePremiumIcon,
    TipsAndUpdates as TipsAndUpdatesIcon
  } from '@mui/icons-material';
  import { Link } from 'react-router-dom';
  import { Divider, IconButton, Stack, SwipeableDrawer } from '@mui/material';
  
  import Logo from "../../assets/images/white-logo.jpg";
  
  // const Search = styled('div')(({ theme }) => ({
  //   position: 'relative',
  //   borderRadius: theme.shape.borderRadius,
  //   backgroundColor: alpha(theme.palette.common.white, 0.15),
  //   '&:hover': {
  //     backgroundColor: alpha(theme.palette.common.white, 0.25),
  //   },
  //   marginLeft: 0,
  //   width: '100%',
  //   [theme.breakpoints.up('sm')]: {
  //     marginLeft: theme.spacing(1),
  //     width: 'auto',
  //     overflow: 'hidden',
  //   },
  // }));
  
  // const SearchIconWrapper = styled('div')(({ theme }) => ({
  //   padding: theme.spacing(0, 2),
  //   height: '100%',
  //   position: 'absolute',
  //   pointerEvents: 'none',
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   overflow: "hidden"
  // }));
  
  // const StyledInputBase = styled(InputBase)(({ theme }) => ({
  //   color: 'inherit',
  //   '& .MuiInputBase-input': {
  //     padding: theme.spacing(1, 1, 1, 0),
  //     // vertical padding + font size from searchIcon
  //     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  //     transition: theme.transitions.create('width'),
  //     width: '100%',
  //     [theme.breakpoints.up('sm')]: {
  //       width: '12ch',
  //       '&:focus': {
  //         width: '18ch',
  //         overflow: "hidden"
  //       },
  //     },
  //   },
  // }));
  
  const Topbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
  
    const handleMenuOpen = () => {
      setMenuOpen(true);
    };
  
    const handleMenuClose = () => {
      setMenuOpen(false);
    };
  
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="sticky" sx={{ backgroundColor: `#108643` }}>
          <Toolbar sx={{display: 'flex', justifyContent: 'space-between', 
            alignItems:'center'}}
          >
            <Box className="left-brand"  sx={{display: 'flex', alignItems: 'center', justifyContent: "space-between"}}>
              <Link
                to='/'
                color="inherit"
              >
                <Button className="logo" sx={{ fontSize: '20px', color: 'white' }}>
                  <img src={Logo} alt="logo ronasdev" width={50} height={50} /> The Legend Code
                </Button>
              </Link>
              <IconButton
                className='humberger'
                color="inherit"
                edge="start"
                onClick={handleMenuOpen}
                sx={{ ml: "auto" }}
              >
                <MenuIcon />
              </IconButton>
              <SwipeableDrawer
                anchor="left"
                open={isMenuOpen}
                onClose={handleMenuClose}
                onOpen={handleMenuOpen}
              >
                <Box
                  sx={{ width: 250 , height:"100%"}}
                  role="presentation"
                  onClick={handleMenuClose}
                  onKeyDown={handleMenuClose}
                  className="side-bar"
                >
                  <Stack spacing={2} p={2}>
                    <Link to="/" className='link'>
                      <Stack direction={'row'} spacing={1}><HomeIcon /><span>Accueil</span></Stack>
                    </Link>
                    <Link to="/tutoriels" className='link'>
                      <Stack direction='row' spacing={1}><MovieIcon /><span>Tutoriels</span></Stack>
                    </Link>
                    <Link to="/formations" className='link'>
                      <Stack direction='row' spacing={1}><TipsAndUpdatesIcon /><span>Formations</span></Stack>
                    </Link>
                    <Link to="/premium" className='link'>
                      <Stack direction='row' spacing={1}><GradeIcon /><span>Premium</span></Stack>
                    </Link>
                    <Link to="/projets" className='link'>
                      <Stack direction='row' spacing={1}><WorkspacePremiumIcon /><span>Projets</span></Stack>
                    </Link>
                  </Stack>
                  <Stack direction={'column' } className="compte" divider={<Divider orientation="vertical" flexItem light={true}
                    sx={{ borderColor: 'white' }} />} >
                
                    <Link to="/signup" className='link'>
                      <Stack direction='row' fontSize={16} sx={{ whiteSpace: "noWrap" }} spacing={1}><PersonAddAlt1Icon /><span>S'inscrire</span></Stack>
                    </Link>
                    <Link to="/signin" className='link'>
                      <Stack direction='row' fontSize={16} sx={{ whiteSpace: "noWrap" }} spacing={1}><LoginIcon /><span>Se connecter</span></Stack>
                    </Link>
                  </Stack>
                </Box>
              </SwipeableDrawer>
            </Box>

            <Stack className="navbar" direction={'row' } 
              spacing={1}>
              <Link to="/" className='link'>
                <Stack direction={'row'} spacing={1} ><HomeIcon /><span>Accueil</span></Stack>
              </Link>
              <Link to="/tutoriels" className='link'>
                <Stack direction='row' spacing={1}><MovieIcon /><span>Tutoriels</span></Stack>
              </Link>
              <Link to="/formations" className='link'>
                <Stack direction='row' spacing={1}><TipsAndUpdatesIcon /><span>Formations</span></Stack>
              </Link>
              <Link to="/premium" className='link'>
                <Stack direction='row' spacing={1}><GradeIcon /><span>Premium</span></Stack>
              </Link>
              <Link to="/projets" className='link'>
                <Stack direction='row' spacing={1}><WorkspacePremiumIcon /><span>Projets</span></Stack>
              </Link>

              <Stack direction={'row' } className="compte" divider={<Divider orientation="vertical" flexItem light={true}
              sx={{ borderColor: 'white' }} />} >
                {/* <Search sx={{ height: '44px', overflow: 'hidden' }}>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Rechercher ..."
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </Search> */}
                <Link to="/signup" className='link'>
                  <Stack direction='row' fontSize={16} sx={{ whiteSpace: "noWrap" }} spacing={1}><PersonAddAlt1Icon /><span>S'inscrire</span></Stack>
                </Link>
                <Link to="/signin" className='link'>
                  <Stack direction='row' fontSize={16} sx={{ whiteSpace: "noWrap" }} spacing={1}><LoginIcon /><span>Se connecter</span></Stack>
                </Link>
              </Stack>
            </Stack>

          </Toolbar>
        </AppBar>
      </Box>
    )
  }
  
  export default Topbar;
            
            