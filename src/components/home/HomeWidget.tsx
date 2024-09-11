import {
    Box,
    Divider,
    Flex,
    Grid,
    GridItem,
    Icon,
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
            <Box>
                <Link as="/" href={params.navigationUrl}>
                <Flex direction="column"
                      bgGradient='linear(to-bl, #627888, #374F60)'
                      _hover={{
                        bgGradient: 'linear(to-bl, #627888, #375590)',
                      }}
                      color="white" shadow="md" borderRadius='10px' height={"23.0em"} width={"23.0em"} minWidth={"100%"}>
                    <Grid textAlign={"right"} templateColumns='repeat(1, 1fr)' height={"14.0em"}>
                        <GridItem colSpan={1} rowSpan={1}>
                            <Wrap>
                                <WrapItem width={"46%"} textAlign={"left"}>
                                    <Stat paddingLeft={"3"}>
                                        <StatNumber color={"#EB8871"} fontSize={"5xl"} textAlign={"center"}height={"9"}>{params.scoreStatNum}</StatNumber>
                                        <br></br>
                                        <StatHelpText fontSize={"1.2em"} textAlign={"center"}>{params.scoreStatText}</StatHelpText>
                                    </Stat>
                                </WrapItem>
                                <WrapItem width={"1%"}>
                                    <Divider orientation='vertical'/>
                                </WrapItem>
                                <WrapItem width={"46%"} textAlign={"center"}>
                                    <Stat>
                                        <StatNumber color={"#FFFFFF"} fontSize={"4xl"} height={"9"}><StatArrow type={params.changeScoreType} boxSize={"8"} />{params.changeScoreStatHelpNum}</StatNumber>
                                        <StatHelpText fontSize={"1.2em"} textAlign={"center"} paddingTop={6}>{params.changeScoreStatText}</StatHelpText>
                                    </Stat>
                                </WrapItem>
                            </Wrap>
                        </GridItem>
                        <GridItem colSpan={1} rowSpan={1} paddingTop={"40%"}>
                            <Wrap height={"20"}>
                                <WrapItem width={"78%"} textAlign={"left"}>
                                    <Text fontSize={"4xl"} color={"white"} paddingLeft={"3"} >Market <br></br><b>{params.marketTypeText}</b></Text>
                                </WrapItem>
                                <WrapItem  paddingTop="7">
                                    <ArrowForwardIcon aria-label='Navigate'aria-label='Navigate' fontSize={"5xl"} fontWeight={"bold"} color="white" color="white"/>
                                </WrapItem>
                                
                            </Wrap>
                        </GridItem>
                    </Grid>
                </Flex>
                </Link>
            </Box>
        </>
    );
};
export default HomeWidget;
