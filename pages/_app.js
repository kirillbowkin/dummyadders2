import {
  ChakraProvider,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { VStack, Flex } from "@chakra-ui/react";
import Navbar from "../components/Navbar/Navbar";

function MyApp({ Component, pageProps }) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <ChakraProvider>
      <VStack h="100vh">
        <Flex
          as="header"
          h="full"
          w="full"
          maxH={16}
          // bg={colorMode === "light" ? "gray.200" : "gray.700"}
          borderBottomColor="gray.500"
          borderBottomWidth={1}
        >
          <Navbar />
        </Flex>
        <Flex
          as="main"
          w="full"
          flex={1}
          borderBottomColor="gray.500"
          borderBottomWidth={1}
        >
          <Component {...pageProps} />
        </Flex>
        {/* <Flex as="footer" h="full" w="full" maxH={8} /> */}
      </VStack>
    </ChakraProvider>
  );
}

export default MyApp;
