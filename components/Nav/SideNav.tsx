import React from "react";
import Link from "next/link";
import {Flex, Box, Text} from "@chakra-ui/react";
import {BiHome} from "react-icons/bi";
import {useRouter} from 'next/router';

const SideNav = () => {
    const router = useRouter();
    return (
        <Flex flexDirection="column">
            <Flex alignContent="center" mx={4}>
                <Box as={BiHome} height="2.6em" width="1.4em"/>
                <Text p={2} fontSize="lg">
                    <Link as="/" href="/">
                        <a className={router.pathname == "/" ? "text-indigo-600 border-b-2 border-solid border-indigo-600" : ""}>Home</a>
                    </Link>
                </Text>
            </Flex>
            <Flex alignContent="center" mx={4}>
                <Box height="2.6em" width="1.4em"/>
                <Text p={2} fontSize="lg">
                    <Link as="/position" href="/position">
                        <a className={router.pathname == "/position" ? "text-indigo-600 border-b-2 border-solid border-indigo-600" : ""}>Market
                            Position</a>
                    </Link>
                </Text>
            </Flex>
            <Flex alignContent="center" mx={12}>
                <Box height="2.6em" width="1.4em"/>
                <Text p={2} fontSize="lg">
                    <Link as="/chart" href="/chart">
                        <a>Position Details</a>
                    </Link>
                </Text>
            </Flex>
            <Flex alignContent="center" mx={4}>
                <Box height="2.6em" width="1.4em"/>
                <Text p={2} fontSize="lg">
                    <Link as="/advantages" href="/advantages">
                        <a className={router.pathname == "/advantages" ? "text-indigo-600 border-b-2 border-solid border-indigo-600" : ""}>Market
                            Advantages</a>
                    </Link>
                </Text>
            </Flex>
            <Flex alignContent="center" mx={12}>
                <Box height="2.6em" width="1.4em"/>
                <Text p={2} fontSize="lg">
                    <Link as="/chart" href="/chart">
                        <a>Advantages Details</a>
                    </Link>
                </Text>
            </Flex>
            <Flex alignContent="center" mx={4}>
                <Box height="2.6em" width="1.4em"/>
                <Text p={2} fontSize="lg">
                    <Link as="/pressures" href="/pressures">
                        <a className={router.pathname == "/pressures" ? "text-indigo-600 border-b-2 border-solid border-indigo-600" : ""}>Market
                            Pressures</a>
                    </Link>
                </Text>
            </Flex>
            <Flex alignContent="center" mx={12}>
                <Box height="2.6em" width="1.4em"/>
                <Text p={2} fontSize="lg">
                    <Link as="/chart" href="/chart">
                        <a>Pressures Details</a>
                    </Link>
                </Text>
            </Flex>
            <Flex alignContent="center" mx={4}>
                <Box height="2.6em" width="1.4em"/>
                <Text p={2} fontSize="lg">
                    <Link as="/performance" href="/performance">
                        <a className={router.pathname == "/performance" ? "text-indigo-600 border-b-2 border-solid border-indigo-600" : ""}>Market
                            Performance</a>
                    </Link>
                </Text>
            </Flex>
            <Flex alignContent="center" mx={12}>
                <Box height="2.6em" width="1.4em"/>
                <Text p={2} fontSize="lg">
                    <Link as="/chart" href="/chart">
                        <a>Performance Details</a>
                    </Link>
                </Text>
            </Flex>
        </Flex>
    );
};
export default SideNav;
