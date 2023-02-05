import React from "react";
import {Box, Flex, Heading} from "@chakra-ui/react";
import {TopNav} from "../Nav";
import {BiMenu} from "react-icons/bi";

type Props = {
    onref: React.RefObject<HTMLButtonElement>;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    //onClick: React.MouseEvent<HTMLButtonElement>;
};

function AppBar(props: Props) {
    const {onref, onClick} = props;
    return (
        <div className="z-50 w-full bg-white top-0 flex flex-wrap items-center justify-between px-2 py-4 shadow">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <Flex flexDirection="row" justifyContent="center" alignItems="center">
                    <Box as="button" ref={onref} onClick={onClick}>
                        <BiMenu size={26}/>
                    </Box>
                    <Heading as="h4" size="lg" ml={4}>
                        Heure Health
                    </Heading>
                </Flex>
                <Flex>
                    <TopNav/>
                </Flex>
            </div>
        </div>
    );
}

export default AppBar;
