import React from "react";
import NavDrawer from './drawer'
import {
useDisclosure
 } from "@chakra-ui/core";
import { useBreakpointValue } from "@chakra-ui/media-query"
import AppBar from '@material-ui/core/AppBar'
import PropTypes from 'prop-types';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Bar from './bar'

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



const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const variant = useBreakpointValue({base:true,md:true,lg:false,xl:false})
  return(
          <>
          
          
        {variant ? <Bar onOpen={onOpen} btnRef={btnRef} />: <ElevationScroll><AppBar><Bar isOpen={isOpen} btnRef={btnRef} /></AppBar></ElevationScroll>} 
      
        <NavDrawer isOpen={isOpen} onClose={onClose}   />
      </>
      );
  
};

export default Header;
