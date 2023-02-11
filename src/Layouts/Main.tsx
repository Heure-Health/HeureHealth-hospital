import React, {ReactNode} from "react";
import {Flex} from "@chakra-ui/react";

type Props = {
    children: ReactNode;
};
const Main = (props: Props) => {
    return (
        <Flex className="max-w-screen-2xl px-4 mx-auto flex flex-wrap items-center justify-center"
              w="100%" width={"100%"}>
            {props.children}
        </Flex>
    );
};
export default Main;
