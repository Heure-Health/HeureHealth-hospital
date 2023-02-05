import React, {ReactNode} from "react";
import {Box, Flex, Image, Text} from "@chakra-ui/react";

type Props = {
    chart: ReactNode;
    Title: string;
    hasImg: boolean;
    children: ReactNode;
};
const Card = (props: Props) => {
    return (
        <><Flex w="50%" borderRight="1px" borderColor="gray.300" m="1">
            {props.chart} </Flex>
            <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
                {props.hasImg && <Image src="props.imgsrc" alt="props.imgalt"/>}
                <Box p="6">
                    <Box d="flex" alignItems="baseline">
                        <Box
                            mt="1"
                            fontWeight="semibold"
                            as="h4"
                            lineHeight="tight"
                            isTruncated
                        >
                            <Text>{props.Title}</Text>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default Card;
