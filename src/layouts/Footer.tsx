import React from "react";
import { Box, Center, Text } from "@chakra-ui/react";

const Footer = (params) => {
    return (
        <Box
            position="fixed"
            bottom="0"
            left="0"
            right="0"
            textAlign="center"
            color="black"
            background={params.pageBgColor}
            py={2}
        >
            <Center display='flex'>
                <Text fontSize={{ base: '10px', md: '12px', lg: '14px' }} color="black">
                    © Copyright 2023 Heure Health
                </Text>
            </Center>
        </Box>
    );
};

export default Footer;