import React from "react";
import {Box, Flex, Link, Image} from "@chakra-ui/react";
import {BiMenu} from "react-icons/bi";
import TopNav from "./TopNav";

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
                </Flex>
                <Link href="/">
                        <Image width='100px' src="https://i.imgur.com/ij8wT22.jpeg" alt="Heure Health"/>
                </Link>
                <Flex>
                    <TopNav/>
                </Flex>
            </div>
        </div>
    );
}

export default AppBar;
