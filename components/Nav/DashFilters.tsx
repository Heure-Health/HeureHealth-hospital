import React from "react";
import { Text, Box, Flex } from "@chakra-ui/react";
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerContent, DrawerCloseButton
} from "@chakra-ui/react";
import Filterlist from "./Filterlist";

type Props = {
    isOpen: any;
    placement: any;
    onClose: any;
    finalFocusRef: any;
};
const DashFilters = (props: Props) => {
    const { isOpen, placement, onClose, finalFocusRef } = props;
    return (
        <Drawer
            isOpen={isOpen}
            placement={placement}
            onClose={onClose}
            finalFocusRef={finalFocusRef}
            isFullHeight={true}
            size="md"
        >
            <DrawerContent>
                <DrawerCloseButton mt={2}/>
                <DrawerHeader >
                    <Text pt={1}>Filters</Text>
                </DrawerHeader>
                <DrawerBody className="bg-slate-50 h-screen">
                    <Filterlist />
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    );
};

export default DashFilters;
