import React from "react";
import {Box, Flex, Icon, Text, useDisclosure} from "@chakra-ui/react";
import {IoFilterSharp} from "react-icons/io5";
import DashFilters from "./DashFilters";

function SubBar() {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const btnRef = React.useRef();
    return (
        <div className="w-full flex flex-wrap items-center justify-between p-3">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <Flex flexDirection="row" justifyContent="center" alignItems="center">
                    <Box py={2}>
                    </Box>
                </Flex>
                <Flex>
                    <div className="inline-flex rounded-md shadow">
                        <Box as='button' ref={btnRef} onClick={onOpen}
                             className="inline-flex items-center justify-center py-2 px-3 border border-transparent text-base font-medium rounded-md text-slate-800 bg-slate-200 hover:bg-slate-300">
                            <Icon as={IoFilterSharp} fontSize='1.2em'/>
                            <Text className="inline-flex items-center justify-center pl-3 text-lg">Filters</Text>
                        </Box>
                    </div>
                    <DashFilters
                        isOpen={isOpen}
                        placement="right"
                        onClose={onClose}
                        finalFocusRef={btnRef}
                    />
                </Flex>
            </div>
        </div>
    );
}

export default SubBar;