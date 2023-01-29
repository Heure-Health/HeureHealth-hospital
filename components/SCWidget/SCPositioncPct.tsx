import {
  Box, Center, Flex,Text,
  CircularProgress, CircularProgressLabel
} from '@chakra-ui/react';

const SCPositioncPct = (params) => {
  return (
    <>
       <Flex direction="column" bgColor="chart.primary" color="white" shadow="md"  borderRadius='10px'>
          <Center display='flex' fontSize={{base: '24px', md: '26px', lg: '28px'}}>{params.title}</Center>
          <Center display='flex'>
            <CircularProgress value={params.value} color='orange.400' size={params.circleSize} thickness={params.circleThickness}>
              <CircularProgressLabel fontSize={{base: '26px', md: '30px', lg: '36px'}} >{params.value + "%"}</CircularProgressLabel>
            </CircularProgress>
          </Center>
          <Box display='flex' mt='5' textAlign='center'>
            <Text fontSize={{ base: '14px', md: '16px', lg: '18px' }}>of your {params.region} competitors are ahead of your Market position</Text>
          </Box>
       </Flex>
    </>
  );
};
export default SCPositioncPct;