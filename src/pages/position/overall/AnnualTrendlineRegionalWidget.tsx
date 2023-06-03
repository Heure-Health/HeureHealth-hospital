import React, {ReactNode} from "react";
import {Box, Center, Flex, Text} from "@chakra-ui/react";
import ToolTipWidget from "../../../components/common/ToolTipWidget";

type Props = {
    widgetBbColor: string,
    widgetWidth: string;
    widgetHeight: string;
    childComponentWidth: string;
    headerLabel: string;
    headerTextColor: string;
    headerTextSize: string;
    tooltipText: string;
    footerLabel: string;
    footerValue: string;
    footerTextColor: string;
    footerTextSize: string;
    footerHeight: string;
    barLineComposedWidgetHeight: string;
    barLineComposedWidgetObject: ReactNode;
};
const TrendlineRegionalWidget = (props: Props) => {
    const {widgetBbColor, widgetWidth, widgetHeight, childComponentWidth, headerLabel, headerTextColor, headerTextSize, footerHeight, tooltipText, footerLabel, footerValue, footerTextColor, footerTextSize, barLineComposedWidgetHeight, barLineComposedWidgetObject} = props;
    return (
        <>
            <Box w={widgetWidth} height={widgetHeight} margin="1" padding="0" shadow="lg" overflow="hidden">
                <Flex width={childComponentWidth} p="3" bg={widgetBbColor} shadow="lg">
                    <Flex w="99%">
                        <Text color={headerTextColor} fontSize={headerTextSize} fontWeight={"bold"}>{headerLabel}</Text>
                    </Flex>
                    <ToolTipWidget
                        tooltipText={tooltipText}
                        tooltipTextBGColor={"#000000"}
                        tooltipTextColor={"gray.100"}
                        tooltipSize={"1.25em"}
                        tooltipCircleBGColor={"grey"}
                        tooltipBGColor={"white"}
                    />
                </Flex>
                <Flex w={childComponentWidth} height={barLineComposedWidgetHeight} bg={widgetBbColor} shadow="md">
                    {barLineComposedWidgetObject}
                </Flex>
                <Flex width={childComponentWidth} bg={widgetBbColor} shadow="md" height={footerHeight}>
                    <Center fontSize={footerTextSize} color={footerTextColor} width={childComponentWidth}>
                        <Text>{footerLabel}</Text>
                        <Text pl="2" fontWeight={"bold"} color={"#000000"}>{footerValue}</Text>
                    </Center>
                </Flex>
            </Box>
        </>
    );
};

export default TrendlineRegionalWidget;