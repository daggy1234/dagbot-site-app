import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Header from '../FancyNavbar/index'
import { makeStyles } from '@material-ui/core/styles';
import BrowserNavbar from '../BrowserNavbar'
import './styles.css'
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Avatar from '@material-ui/core/Avatar';
import Toolbar from '@material-ui/core/Toolbar';
import { isMobile, BrowserView, MobileView, } from "react-device-detect";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     '& > *': {
//       margin: theme.spacing(5),
//       marginLeft: "10px"
//     },
//   },
//   small: {
//     width: theme.spacing(7),
//     height: theme.spacing(7),
//   },
//   large: {
//     width: theme.spacing(15),
//     height: theme.spacing(15),
//   },
// }));


function ElevationScroll(props) {
    const { children} = props;
    
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

  ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired
  }

const NavBar = (props) => {
    var viewport = "3vw";
    if (isMobile)  {
        viewport = "6vw";
    } 
    
    return(
    
              <Header />
        
    );
}

export default NavBar;