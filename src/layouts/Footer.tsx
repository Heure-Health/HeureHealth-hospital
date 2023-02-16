import React from "react";
import {Box, Center, Text} from "@chakra-ui/react";

const Footer = () => {
    /*const theme = useTheme();
    const bg = useColorModeValue(theme.colors.gray[100], theme.colors.gray[800])
    const color = useColorModeValue("gray.800", "gray.100")*/
    return (
        <Box textAlign="center" color={"black"} background={"#F2F2F2"}>
            <Center display='flex' my='1.5'> <Text fontSize={{base: '10px', md: '12px', lg: '14px'}} color={"black"}> ©
                Copyright 2023 Heure Health</Text></Center>
        </Box>
    );
};
export default Footer;
