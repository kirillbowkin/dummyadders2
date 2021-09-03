import React, { useState } from "react";
import { Text, VStack, Box } from "@chakra-ui/react";
import FullAdderCircuitSvg from "../components/FullAdder/FullAdderCircuitSvg";
import FullAdderDashboard from "../components/FullAdder/FullAdderDashboard";
import FullAdderBoxSvg from "../components/FullAdder/FullAdderBoxSvg";

const FullAdder = () => {
  const [isCircuit, setIsCircuit] = useState(true);
  const onClickHandler = () => setIsCircuit(!isCircuit);

  return (
    <VStack w="full" alignItems="center" justifyContent="space-evenly" p={4}>
      <VStack>
        <Text fontSize="2xl" mb={4} fontWeight="semibold">
          Half Adder
        </Text>
        <Box w={[80, "full"]} overflow="auto">
          {isCircuit ? (
            <FullAdderCircuitSvg onClickHandler={onClickHandler} />
          ) : (
            <FullAdderBoxSvg onClickHandler={onClickHandler} />
          )}
        </Box>
      </VStack>
      <FullAdderDashboard />
    </VStack>
  );
};

export default FullAdder;
