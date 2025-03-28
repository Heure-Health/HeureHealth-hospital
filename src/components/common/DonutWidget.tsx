import {Center, CircularProgress, CircularProgressLabel, Flex, Text} from '@chakra-ui/react';
const DonutWidget = (params) => {
    return (
        <>
            <Flex direction="column"
                  bgColor={params.widgetBgColor} color={params.circleTextFontColor} shadow="md" borderRadius='0px'
                  height={params.widgetHeight} width={params.widgetWidth}>
                <Center display='flex' height={"60%"}>
                    <CircularProgress value={params.value} color={params.widgetCircleBgColor} size={params.circleSize}
                                      thickness={params.circleThickness} mt={"3"}>
                        <CircularProgressLabel fontSize={params.circleTextFontSize}>{params.value + "%"}</CircularProgressLabel>
                    </CircularProgress>
                </Center>
                <Flex textAlign='center' height={"20%"} direction={"column"} my={2}>
                    <Text paddingLeft={1} paddingRight={1} paddingBottom={1} fontSize={params.widgetTextFontSize} verticalAlign={"text-bottom"} color={params.widgetCircleTextFontColor}>{params.widgetText}</Text>
                </Flex>
            </Flex>
        </>
    );
};
export default DonutWidget;