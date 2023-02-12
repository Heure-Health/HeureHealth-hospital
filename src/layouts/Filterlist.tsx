import React from "react";
import {Box} from "@chakra-ui/react";
import MainFilter from './MainFilter';
import RegionList from "./RegionList";
import YearList from "./YearList";

const filList = (
    <>
        <Box className="flex justify-center items-center my-3">
            <MainFilter/>
        </Box>
        <Box className="flex my-1 underline underline-offset-1">Region</Box>
        <Box className="flex my-1">
            <RegionList/>
        </Box>
        <Box className="flex my-3 underline underline-offset-1">Year</Box>
        <Box className="flex m-1">
            <YearList/>
        </Box>
    </>
);

const Filterlist = () => {
    return <>{filList}</>;
};

export default Filterlist;
