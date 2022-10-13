import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";
type Props = {
    Title:string;
    hasImg: boolean;
    children: ReactNode;
};
const Card = (props: Props) => {
    return (
        <>
            <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
                {props.hasImg && <Image src="props.imgsrc" alt="props.imgalt" />}
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
