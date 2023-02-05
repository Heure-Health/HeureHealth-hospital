import React from "react";
import Link from "next/link";
import {Box, Flex, Text} from "@chakra-ui/react";
import {BiHome} from "react-icons/bi";
import {useRouter} from 'next/router';

const SideNav = () => {
    const router = useRouter();
    return (
        <Flex flexDirection="column">
            <Flex alignContent="center" mx={4}>
                <Box as={BiHome} height="2.6em" width="1.4em"/>
                <Text p={2} fontSize="lg">
                    <Link as="/" href="/" className={router.pathname == "/" ? "text-indigo-600 border-b-2 border-solid border-indigo-600" : ""}>
                        Home
                    </Link>
                </Text>
            </Flex>
            <Flex alignContent="center" mx={4}>
                <Box height="2.6em" width="1.4em"/>
                <Text p={2} fontSize="lg">
                    <Link as="/position" href="/position" className={router.pathname == "/position" ? "text-indigo-600 border-b-2 border-solid border-indigo-600" : ""}>
                        Market Position
                    </Link>
                </Text>
            </Flex>
            <Flex alignContent="center" mx={12}>
                <Box height="2.6em" width="1.4em"/>
                <Text p={2} fontSize="lg">
                    <Link as="/chart" href="/chart">
                        Position Details
                    </Link>
                </Text>
            </Flex>
            <Flex alignContent="center" mx={4}>
                <Box height="2.6em" width="1.4em"/>
                <Text p={2} fontSize="lg">
                    <Link as="/advantages" href="/advantages" className={router.pathname == "/advantages" ? "text-indigo-600 border-b-2 border-solid border-indigo-600" : ""}>
                        Market Advantages
                    </Link>
                </Text>
            </Flex>
            <Flex alignContent="center" mx={12}>
                <Box height="2.6em" width="1.4em"/>
                <Text p={2} fontSize="lg">
                    <Link as="/chart" href="/chart">
                        Advantages Details
                    </Link>
                </Text>
            </Flex>
            <Flex alignContent="center" mx={4}>
                <Box height="2.6em" width="1.4em"/>
                <Text p={2} fontSize="lg">
                    <Link as="/pressures" href="/pressures" className={router.pathname == "/pressures" ? "text-indigo-600 border-b-2 border-solid border-indigo-600" : ""}>
                        Market Pressures
                    </Link>
                </Text>
            </Flex>
            <Flex alignContent="center" mx={12}>
                <Box height="2.6em" width="1.4em"/>
                <Text p={2} fontSize="lg">
                    <Link as="/chart" href="/chart">
                        Pressures Details
                    </Link>
                </Text>
            </Flex>
            <Flex alignContent="center" mx={4}>
                <Box height="2.6em" width="1.4em"/>
                <Text p={2} fontSize="lg">
                    <Link as="/performance" href="/performance" className={router.pathname == "/performance" ? "text-indigo-600 border-b-2 border-solid border-indigo-600" : ""}>
                        Market Performance
                    </Link>
                </Text>
            </Flex>
            <Flex alignContent="center" mx={12}>
                <Box height="2.6em" width="1.4em"/>
                <Text p={2} fontSize="lg">
                    <Link as="/chart" href="/chart">
                        Performance Details
                    </Link>
                </Text>
            </Flex>
        </Flex>
    );
};
export default SideNav;
