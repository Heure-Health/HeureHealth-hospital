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
            <link
                rel="stylesheet"
                type="text/css"
                href="../../public/styles/nprogress.css"
            />
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link
                href="https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500;600;700;800;900&display=swap"
                rel="stylesheet"/>
        </Head>
        <Header/>
        <Main>{props.children}</Main>
    </>
    </>;
    return element;
};

export default Layout;