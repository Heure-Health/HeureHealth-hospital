import {Box, Center, Flex, Heading, Text} from '@chakra-ui/react';

const SCMvOutNbr = (params) => {
    return (
        <>
            <Flex direction="column" bgImage={"linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)"} color="white" shadow="md" borderRadius='10px'>
                <Center display='flex' fontSize={{base: '24px', md: '26px', lg: '28px'}} mt='1'> And</Center>
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
                <Box display='flex' mt='6' textAlign='center'>
                    <Text fontSize={{base: '14px', md: '16px', lg: '18px'}}>moving out of your market position in the
                        last rolling quarter</Text>
                </Box>
            </Flex>
        </>
    );
};
export default SCMvOutNbr;
