import React from "react";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Input,
  DrawerFooter,
  Button
} from "@chakra-ui/core";
import NavElement from './NavElement'


const NavDrawer = ({ isOpen,onClose,btnRef }) => {
    return(
    <Drawer 
        isOpen={isOpen}
        placement="right"
        finalFocusRef={btnRef}
        onClose={onClose}
        size="xs"
        >
        <DrawerOverlay className="hoisted"/>
        <DrawerContent bg="#23272A" color="#7289DA">
          <DrawerCloseButton  />
          <DrawerHeader  styles={{opacity: 0}} borderBottomWidth="1px">
            NAVIGATION
          </DrawerHeader>
         
          <DrawerBody >
            <NavElement />
          </DrawerBody>
          
        </DrawerContent>
      </Drawer>);
}

export default NavDrawer;