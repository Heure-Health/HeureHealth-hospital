import * as React from "react";
import {AppProps} from "next/app";
import dynamic from "next/dynamic";
import {ChakraProvider, ColorModeScript, extendTheme} from "@chakra-ui/react";
//import "./styles/main.css";
//import theme from "../theme";
import "./styles/allstyles.scss";

const TopProgressBar = dynamic(() => import("components/Layout/TopProgress"), {
    ssr: false,
});

const colors = {
    app: {
        primary: '#1a365d',
        secondary: '#153e75',
        success: '#2a69ac',
    },
    chart: {
        primary: '#1ABC9C',
        secondary: '#566573'
    }
}

const theme = extendTheme({colors})


const App = ({Component, pageProps}: AppProps) => {
    return (
        <ChakraProvider theme={theme}>
            <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
            <TopProgressBar/>
            <Component {...pageProps} />
        </ChakraProvider>
    );
};

export default App;
/* { loading?<h1>Loading...</h1> : <Component {...pageProps} /> }*/
