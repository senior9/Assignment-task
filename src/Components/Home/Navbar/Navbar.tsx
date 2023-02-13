import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate,Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar : React.FC = () => {

    // const navigate = useNavigate()
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const handleUserInfo = () => {
    if (!isLoggedIn) {
    //   navigate('/login')
    } else {
    //   navigate('/user-info')
    }
  }
    return (
        <Box className='root' sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant='dense'>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link color='inherit' to="/user-info"> <Button color='inherit'> User Information</Button></Link>
          </Typography>
          <Button color="inherit"><Link to='/'>Login</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
    );
};

export default Navbar;