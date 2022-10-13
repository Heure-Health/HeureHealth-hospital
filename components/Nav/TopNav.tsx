import React from "react";
import { Box } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { useColorMode, Avatar } from '@chakra-ui/react';
//import { HiSun, HiMoon } from "react-icons/hi";

const TopList = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div>
      {/* <Box as="button" onClick={toggleColorMode}>
        {colorMode === "light" ? <HiMoon size={28} /> : <HiSun size={28} />}
      </Box> */}
      <Menu>
        <MenuButton>
          <Avatar size="sm" src='' />
        </MenuButton>
        <MenuList>
          <MenuGroup>
            <MenuItem>My Account</MenuItem>
          </MenuGroup>
          <MenuDivider />
          <MenuGroup>
            <MenuItem>Faq</MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    </div>
  );
};

const TopNav = () => {
  return (
    <>
      <TopList />
    </>
  );
};
export default TopNav;
