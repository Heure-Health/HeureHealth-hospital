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
                    Market Advantages
                </Text>
            </Flex>
            <Flex alignContent="center" mx={12}>
                <Box height="2.6em" width="1.4em"/>
                <Text p={2} fontSize="lg">
                    <ActiveLink href={"/advantages"} title={"Overall"} prefetch={"/"} />
                </Text>
            </Flex>
            <Flex alignContent="center" mx={12}>
                <Box height="2.6em" width="1.4em"/>
                <Text p={2} fontSize="lg">
                    <ActiveLink href={"/advantages/growth"} title={"Growth"} prefetch={"/"} />
                </Text>
            </Flex>
            <Flex alignContent="center" mx={12}>
                <Box height="2.6em" width="1.4em"/>
                <Text p={2} fontSize="lg">
                    <ActiveLink href={"/advantages/quality"} title={"Quality"} prefetch={"/"} />
                </Text>
            </Flex>
            <Flex alignContent="center" mx={12}>
                <Box height="2.6em" width="1.4em"/>
                <Text p={2} fontSize="lg">
                    <ActiveLink href={"/advantages/cost"} title={"Cost"} prefetch={"/"} />
                </Text>
            </Flex>
            <Flex alignContent="center" mx={12}>
                <Box height="2.6em" width="1.4em"/>
                <Text p={2} fontSize="lg">
                    <ActiveLink href={"/advantages/comparisons"} title={"Comparisons"} prefetch={"/"} />
                </Text>
            </Flex>
            <Flex alignContent="center" mx={4}>
                <Box height="2.6em" width="1.4em"/>
                <Text p={2} fontSize="lg">
                    Market Pressures
                </Text>
            </Flex>
            <Flex alignContent="center" mx={12}>
                <Box height="2.6em" width="1.4em"/>
                <Text p={2} fontSize="lg">
                    <ActiveLink href={"/pressures"} title={"Overall"} prefetch={"/"} />
                </Text>
            </Flex>
            <Flex alignContent="center" mx={12}>
                <Box height="2.6em" width="1.4em"/>
                <Text p={2} fontSize="lg">
                    <ActiveLink href={"/pressures/growth"} title={"Growth"} prefetch={"/"} />
                </Text>
            </Flex>
            <Flex alignContent="center" mx={12}>
                <Box height="2.6em" width="1.4em"/>
                <Text p={2} fontSize="lg">
                    <ActiveLink href={"/pressures/quality"} title={"Quality"} prefetch={"/"} />
                </Text>
            </Flex>
            <Flex alignContent="center" mx={12}>
                <Box height="2.6em" width="1.4em"/>
                <Text p={2} fontSize="lg">
                    <ActiveLink href={"/pressures/cost"} title={"Cost"} prefetch={"/"} />
                </Text>
            </Flex>
            <Flex alignContent="center" mx={12}>
                <Box height="2.6em" width="1.4em"/>
                <Text p={2} fontSize="lg">
                    <ActiveLink href={"/pressures/comparisons"} title={"Comparisons"} prefetch={"/"} />
                </Text>
            </Flex>
            <Flex alignContent="center" mx={4}>
                <Box height="2.6em" width="1.4em"/>
                <Text p={2} fontSize="lg">
                    Market Performance
                </Text>
            </Flex>
            <Flex alignContent="center" mx={12}>
                <Box height="2.6em" width="1.4em"/>
                <Text p={2} fontSize="lg">
                    <ActiveLink href={"/performance"} title={"Overall"} prefetch={"/"} />
                </Text>
            </Flex>
            <Flex alignContent="center" mx={12}>
                <Box height="2.6em" width="1.4em"/>
                <Text p={2} fontSize="lg">
                    <ActiveLink href={"/performance/growth"} title={"Growth"} prefetch={"/"} />
                </Text>
            </Flex>
            <Flex alignContent="center" mx={12}>
                <Box height="2.6em" width="1.4em"/>
                <Text p={2} fontSize="lg">
                    <ActiveLink href={"/performance/quality"} title={"Quality"} prefetch={"/"} />
                </Text>
            </Flex>
            <Flex alignContent="center" mx={12}>
                <Box height="2.6em" width="1.4em"/>
                <Text p={2} fontSize="lg">
                    <ActiveLink href={"/performance/cost"} title={"Cost"} prefetch={"/"} />
                </Text>
            </Flex>
            <Flex alignContent="center" mx={12}>
                <Box height="2.6em" width="1.4em"/>
                <Text p={2} fontSize="lg">
                    <ActiveLink href={"/performance/comparisons"} title={"Comparisons"} prefetch={"/"} />
                </Text>
            </Flex>
        </Flex>
    );
};
export default SideNav;
