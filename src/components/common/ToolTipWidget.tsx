import {Box, Flex, Tooltip} from '@chakra-ui/react';
import {HiInformationCircle} from "react-icons/hi";
import React from "react";

type Params = {
    tooltipText: string;
    tooltipTextBGColor: string;
    tooltipTextColor: string;
    tooltipSize: string;
    tooltipCircleBGColor: string;
    tooltipBGColor: string;
};
const ToolTipWidget = (params: Params) => {
    const {tooltipText, tooltipTextBGColor, tooltipTextColor, tooltipSize, tooltipCircleBGColor, tooltipBGColor} = params;

    return (
        <>
            <Flex direction="row-reverse">
                <Tooltip hasArrow label={tooltipText} placement="bottom" bg={tooltipTextBGColor} color={tooltipTextColor}>
                    <Box>
                        <Box as={HiInformationCircle} size={tooltipSize} color={tooltipCircleBGColor} bgColor={tooltipBGColor}/>
                    </Box>
                </Tooltip>
            </Flex>
        </>
    );
};
export default ToolTipWidget;