import React from "react";
import {Box, Center, Text} from "@chakra-ui/react";

const Footer = (params) => {
    return (
        <Box textAlign="center" color={"black"} background={params.pageBgColor}>
            <Center display='flex' my='1.5'> <Text fontSize={{base: '10px', md: '12px', lg: '14px'}} color={"black"}> ©
                Copyright 2023 Heure Health</Text></Center>
        </Box>
    );
};
export default Footer;
