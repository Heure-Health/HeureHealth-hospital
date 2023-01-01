import {
  Box, Center, Flex,Text,
  CircularProgress, CircularProgressLabel
} from '@chakra-ui/react';



const SCPositioncPct = () => {
  return (
    <>
        <Flex direction="column" bgColor="chart.primary" color="white" shadow="md"  borderRadius='5px'>
          <Center display='flex' > Today</Center>

          <Center display='flex' mt='2'>
            <CircularProgress value={80} color='orange.400'>
              <CircularProgressLabel>80%</CircularProgressLabel>
            </CircularProgress>
          </Center>

          <Box display='flex' mt='5' textAlign='center'> 
          
          <Text fontSize='10px'>of your Eastern region competitors are ahead of your Market position</Text> </Box>

        </Flex>
      
    </>
  );
};

export default SCPositioncPct;
