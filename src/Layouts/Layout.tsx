import React, {ReactNode} from "react";
import Head from "next/head";
import {Header, Main} from ".";

type Props = {
    children: ReactNode;
};

const Layout = (props: Props) => {
    let element = <><>
        <Head>
            <title>Heure Health</title>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta charSet="utf-8"/>
        </Head>
        <Header/>
        <Main>{props.children}</Main>
    </>
    </>;
    return element;
};

export default Layout;