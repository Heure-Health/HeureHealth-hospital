import React from "react";
import {Box, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Heading} from "@chakra-ui/react";
import {BiMenu} from "react-icons/bi";
import {SideNav} from "../Nav";

type Props = {
    isOpen: any;
    placement: any;
    onClose: any;
    finalFocusRef: any;
};
const SideBar = (props: Props) => {
    const {isOpen, placement, onClose, finalFocusRef} = props;
    return (
        <div className="2xl:container  2xl:mx-auto px-4">
            <Drawer
                isOpen={isOpen}
                placement={placement}
                onClose={onClose}
                finalFocusRef={finalFocusRef}
            >
                <DrawerOverlay/>
                <DrawerContent>
                    <DrawerHeader borderBottom="1px solid #e0e0e0" pt={1} shadow="sm" my={3}>
                        <Flex>
                            <Box as="button" onClick={onClose}>
                                <BiMenu size={26}/>
                            </Box>
                            <Heading as="h4" size="lg" ml={4}>
                                Heure Health
                            </Heading>
                        </Flex>
                    </DrawerHeader>
                    <DrawerBody p={3}>
                        <SideNav/>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </div>
    );
};

export default SideBar;
