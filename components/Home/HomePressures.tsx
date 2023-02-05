import {Box, Button, Center, Flex, Heading, Text} from '@chakra-ui/react';
import {ArrowRightIcon} from "@chakra-ui/icons";
import Link from "next/link";
import React from "react";

const HomePressures = (params) => {
    return (
        <>
            <Flex direction="column"
                  bgImage={"linear-gradient(to right, #b8cbb8 0%, #b8cbb8 0%, #b465da 0%, #cf6cc9 33%, #ee609c 66%, #ee609c 100%)"}
                  color="white" shadow="md" borderRadius='10px'>
                <Center display='flex' fontSize={{base: '24px', md: '26px', lg: '28px'}} mt='1'> Market
                    Pressures</Center>
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
                <Link as="/" href="/position">
                    <Button rightIcon={<ArrowRightIcon/>} variant='ghost'/>
                </Link>
            </Flex>
        </>
    );
};
export default HomePressures;