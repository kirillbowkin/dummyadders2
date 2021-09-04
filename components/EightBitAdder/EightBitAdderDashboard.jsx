import { observer } from "mobx-react-lite";
import React from "react";

import { Button, HStack, VStack, Text, Flex, Box } from "@chakra-ui/react";
import { SwitchButton } from "../SwithcButton";
import Bulb from "../Bulb";

import eightBitAdder from "../../store/EightBitAdder";

const EightBitAdderDashboard = observer(() => {
  return (
    <VStack spacing={8} alignItems="center" w="full">
      <Flex w={["full", "xl"]} overflow="auto" p={2}>
        <VStack alignItems="flex-end" spacing={4}>
          <HStack spacing={5}>
            <Flex flexDir="row-reverse">
              {eightBitAdder.S.map((_, idx) => (
                <Box key={idx} mx={6}>
                  <Text>{idx}</Text>
                </Box>
              ))}
            </Flex>
            <Text>S</Text>
          </HStack>
          <HStack spacing={5}>
            <Flex flexDir="row-reverse">
              {eightBitAdder.A.map((_, idx) => (
                <Box key={idx} mx={2}>
                  <SwitchButton
                    key={idx}
                    isActive={eightBitAdder.A[idx]}
                    onClickHandler={() => {
                      eightBitAdder.setA(idx, !eightBitAdder.A[idx]);
                      eightBitAdder.add();
                    }}
                  />
                </Box>
              ))}
            </Flex>
            <Text>A</Text>
          </HStack>
          <HStack spacing={5}>
            <Flex flexDir="row-reverse">
              {eightBitAdder.B.map((_, idx) => (
                <Box key={idx} mx={2}>
                  <SwitchButton
                    key={idx}
                    isActive={eightBitAdder.B[idx]}
                    onClickHandler={() => {
                      eightBitAdder.setB(idx, !eightBitAdder.B[idx]);
                      eightBitAdder.add();
                    }}
                  />
                </Box>
              ))}
            </Flex>
            <Text>B</Text>
          </HStack>
          <HStack spacing={5}>
            <Flex flexDir="row-reverse">
              {eightBitAdder.S.map((_, idx) => (
                <Box key={idx} m={3}>
                  <Bulb key={idx} isLit={eightBitAdder.S[idx]} />
                </Box>
              ))}
            </Flex>
            <Text>S</Text>
          </HStack>
        </VStack>
      </Flex>
      <Button onClick={() => eightBitAdder.reset()}>Reset</Button>
    </VStack>
  );
});

export default EightBitAdderDashboard;
