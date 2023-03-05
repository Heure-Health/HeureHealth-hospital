import {Box, Center, Flex, Heading, Text} from '@chakra-ui/react';

const SnapshotWidget = (params) => {
    return (
        <>
            <Flex direction="column" bgColor={params.widgetBgColor} color="white" shadow="md" borderRadius='10px' height={params.widgetHeight} width={params.widgetWidth}>
                <Center display='flex' mt='3'>
                    <Heading fontSize={params.valueFontSize} color={params.valueFontColor}>
                        {params.value}
                    </Heading>
                </Center>
                <Box display='flex' mt='1' textAlign='center'>
                    <Text fontSize={params.widgetTextFontSize} color={params.widgetTextFontColor}>{params.widgetText}</Text>
                </Box>
            </Flex>
        </>
    );
};
export default SnapshotWidget;
