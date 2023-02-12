import {Box, Button, Center, Flex, Heading, Text} from '@chakra-ui/react';
import {ArrowForwardIcon} from "@chakra-ui/icons";
import Link from "next/link";
import React from "react";

const HomePosition = (params) => {
    return (
        <>
            <Flex direction="column" bgImage={"linear-gradient(-90deg, #374F60 0%, #587183 100%)"} color="white"
                  shadow="md" borderRadius='10px'>
                <Center display='flex' fontSize={{base: '24px', md: '26px', lg: '28px'}} mt='1'> Market
                    Performance</Center>
                <Center display='flex' mt='7'>
                    <Heading fontSize={{base: '26px', md: '30px', lg: '36px'}}>
                        {params.value + "%"}
                    </Heading>
                </Center>
                <Center display='flex' mt='7'>
                    <Text fontSize={{base: '14px', md: '16px', lg: '18px'}}>competitors</Text>
                </Center>
                <Box display='flex' mt='8' textAlign='center'>
                    <Text fontSize='11px'></Text>
                </Box>
                <Link as="/" href="/performance">
                    <Button rightIcon={<ArrowForwardIcon/>} fontSize={"4xl"} fontWeight={"bold"} variant='ghost'/>
                </Link>
            </Flex>
        </>
    );
};
export default HomePosition;
