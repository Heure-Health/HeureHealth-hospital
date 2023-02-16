import {
    Box,
    Divider,
    Flex,
    Grid,
    GridItem,
    IconButton,
    Stat,
    StatArrow,
    StatHelpText,
    StatNumber,
    Text,
    Wrap,
    WrapItem
} from '@chakra-ui/react';
import {ArrowForwardIcon} from "@chakra-ui/icons";
import Link from "next/link";
import React from "react";
const HomeWidget = (params) => {
    return (
        <>
            <Box width="100%" p={"5"}>
                <Flex direction="column"
                      bgImage={"linear-gradient(45deg, #374F60 -50%, #587183 50%)"}
                      color="white" shadow="md" borderRadius='10px' height={"14.0em"} width={"18.0em"}>
                    <Grid textAlign={"right"} templateColumns='repeat(1, 1fr)' height={"14.0em"}>
                        <GridItem colSpan={1} rowSpan={1}>
                            <Wrap>
                                <WrapItem width={"35%"} textAlign={"left"}>
                                    <Stat paddingLeft={"3"}>
                                        <StatNumber color={"#EB8871"} fontSize={"3xl"} height={"9"}>{params.scoreStatNum}</StatNumber>
                                        <StatHelpText fontSize={"0.5em"} textAlign={"center"}>{params.scoreStatText}</StatHelpText>
                                    </Stat>
                                </WrapItem>
                                <WrapItem width={"11%"}>
                                    <Divider orientation='vertical'/>
                                </WrapItem>
                                <WrapItem width={"40%"} textAlign={"right"}>
                                    <Stat>
                                        <StatNumber color={"#FFFFFF"} fontSize={"2xl"} height={"9"}><StatArrow type={params.changeScoreType} boxSize={"8"} />{params.changeScoreStatHelpNum}</StatNumber>
                                        <StatHelpText fontSize={"0.5em"} textAlign={"center"}>{params.changeScoreStatText}</StatHelpText>
                                    </Stat>
                                </WrapItem>
                            </Wrap>
                        </GridItem>
                        <GridItem colSpan={1} rowSpan={1} paddingTop={"24"}>
                            <Wrap height={"10"}>
                                <WrapItem width={"78%"} textAlign={"left"}>
                                    <Text fontSize={"2xl"} color={"white"} paddingLeft={"3"}>{params.marketTypeText}</Text>
                                </WrapItem>
                                <WrapItem>
                                    <Link as="/" href={params.navigationUrl}>
                                        <IconButton aria-label='Navigate to Market Position' icon={<ArrowForwardIcon/>} fontSize={"4xl"} fontWeight={"bold"} variant='ghost'/>
                                    </Link>
                                </WrapItem>
                            </Wrap>
                        </GridItem>
                    </Grid>
                </Flex>
            </Box>
        </>
    );
};
export default HomeWidget;
