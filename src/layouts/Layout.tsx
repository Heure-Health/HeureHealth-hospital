import React, { ReactNode } from "react";
import Head from "next/head";
import { Header, Main } from ".";
import styled from "styled-components";

type Props = {
    children: ReactNode;
};

const LayoutContainer = styled.div`
    background-color: #f0f0f0; // Light gray color
    min-height: 100vh;
`;

const Layout = (props: Props) => {
    return (
        <LayoutContainer>
            <Head>
                <title>Heure Health</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
            </Head>
            <Header />
            <Main>{props.children}</Main>
        </LayoutContainer>
    );
};

export default Layout;
