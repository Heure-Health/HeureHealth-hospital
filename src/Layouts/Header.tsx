import React from "react";
import {AppBar, SideBar, SubBar} from "./index";
import {useDisclosure} from "@chakra-ui/react";

const Header = () => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const btnRef = React.useRef();

    return (
        <>
            <AppBar onref={btnRef} onClick={onOpen}/>
            <SideBar
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                finalFocusRef={btnRef}
            />
            <SubBar/>
        </>
    );
};

export default Header;
