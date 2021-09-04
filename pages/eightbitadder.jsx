import { Box, Text, VStack } from "@chakra-ui/react";
import React from "react";
import EightBitAdderCuricuitSvg from "../components/EightBitAdder/EightBitAdderCuricuitSvg";
import EightBitAdderDashboard from "../components/EightBitAdder/EightBitAdderDashboard";

const EightBitAdder = () => {
  return (
    <VStack
      w="full"
      alignItems="center"
      justifyContent="space-evenly"
      p={4}
      overflow="hidden"
    >
      <VStack w="full">
        <Text fontSize="2xl" mb={4} fontWeight="semibold">
          Eight Bit Adder
        </Text>
        <Box w={[80, "full", "full", "5xl"]} overflow="auto">
          <EightBitAdderCuricuitSvg />
        </Box>
      </VStack>
      <EightBitAdderDashboard />
    </VStack>
  );
};

export default EightBitAdder;
