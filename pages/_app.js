import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "../styles/globals.css";
import "../styles/test.css";

const colors = {
	brand: {
		// you can add more custom colors here
		primary: "rgb(196,59,151)",
		black: "#0E1017",
	},
};

const theme = extendTheme({
	colors,
	// fonts: {
	// 	heading: `"Inter", 'sans-serif'`,
	// 	body: `"Inter", 'sans-serif'`,
	// },
	shadows: {
		shadowService: "0px 3px 5px 1px  #C1EFFE",
	},
});

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default MyApp;
