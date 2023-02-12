import React from "react";
import Link from "next/link";
import {Box, Flex, Text} from "@chakra-ui/react";
import {BiHome} from "react-icons/bi";
import {useRouter} from 'next/router';
import ActiveLink from "../components/common/ActiveLink";

const SideNav = () => {
    const router = useRouter();
    return (
        <Flex flexDirection="column">
            <Flex alignContent="center" mx={4}>
                <Box as={BiHome} height="2.6em" width="1.4em"/>
                <Text p={2} fontSize="lg">
                    <Link as="/" href="/"
                          className={router.pathname == "/" ? "text-indigo-600 border-b-2 border-solid border-indigo-600" : ""}>
                        Home
                    </Link>
                </Text>
            </Flex>
            <Flex alignContent="center" mx={4}>
                <Box height="2.6em" width="1.4em"/>
                <Text p={2} fontSize="lg">
                    Market Position
                </Text>
            </Flex>
            <Flex alignContent="center" mx={12}>
                <Box height="2.6em" width="1.4em"/>
                <Text p={2} fontSize="lg">
                    <ActiveLink href={"/position"} title={"Overall"} prefetch={"/"} />
                </Text>
            </Flex>
            <Flex alignContent="center" mx={12}>
                <Box height="2.6em" width="1.4em"/>
                <Text p={2} fontSize="lg">
                    <ActiveLink href={"/position/growth"} title={"Growth"} prefetch={"/"} />
                </Text>
            </Flex>
            <Flex alignContent="center" mx={12}>
                <Box height="2.6em" width="1.4em"/>
                <Text p={2} fontSize="lg">
                    <ActiveLink href={"/position/quality"} title={"Quality"} prefetch={"/"} />
                </Text>
            </Flex>
            <Flex alignContent="center" mx={12}>
                <Box height="2.6em" width="1.4em"/>
                <Text p={2} fontSize="lg">
                    <ActiveLink href={"/position/cost"} title={"Cost"} prefetch={"/"} />
                </Text>
            </Flex>
            <Flex alignContent="center" mx={12}>
                <Box height="2.6em" width="1.4em"/>
                <Text p={2} fontSize="lg">
                    <ActiveLink href={"/position/comparisons"} title={"Comparisons"} prefetch={"/"} />
                </Text>
            </Flex>
            <Flex alignContent="center" mx={4}>
                <Box height="2.6em" width="1.4em"/>
                <Text p={2} fontSize="lg">
                    <Link as="/advantages" href="/src1/pages/Advantages"
                          className={router.pathname == "/advantages" ? "text-indigo-600 border-b-2 border-solid border-indigo-600" : ""}>
                        Market Advantages
                    </Link>
                </Text>
            </Flex>
            <Flex alignContent="center" mx={12}>
                <Box height="2.6em" width="1.4em"/>
                <Text p={2} fontSize="lg">
                    <Link as="/chart" href="/Chart">
                        Advantages Details
                    </Link>
                </Text>
            </Flex>
            <Flex alignContent="center" mx={4}>
                <Box height="2.6em" width="1.4em"/>
                <Text p={2} fontSize="lg">
                    <Link as="/pressures" href="/src1/pages/Pressures"
                          className={router.pathname == "/pressures" ? "text-indigo-600 border-b-2 border-solid border-indigo-600" : ""}>
                        Market Pressures
                    </Link>
                </Text>
            </Flex>
            <Flex alignContent="center" mx={12}>
                <Box height="2.6em" width="1.4em"/>
                <Text p={2} fontSize="lg">
                    <Link as="/chart" href="/src1/pages/Chart">
                        Pressures Details
                    </Link>
                </Text>
            </Flex>
            <Flex alignContent="center" mx={4}>
                <Box height="2.6em" width="1.4em"/>
                <Text p={2} fontSize="lg">
                    <Link as="/Performance" href="/Performance"
                          className={router.pathname == "/performance" ? "text-indigo-600 border-b-2 border-solid border-indigo-600" : ""}>
                        Market Performance
                    </Link>
                </Text>
            </Flex>
            <Flex alignContent="center" mx={12}>
                <Box height="2.6em" width="1.4em"/>
                <Text p={2} fontSize="lg">
                    <Link as="/chart" href="/src1/pages/Chart">
                        Performance Details
                    </Link>
                </Text>
            </Flex>
        </Flex>
    );
};
export default SideNav;
