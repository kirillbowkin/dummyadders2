import { Button, HStack, Text, VStack } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import React from "react";

import halfAdder from "../../store/HalfAdder";
import Bulb from "../Bulb";
import { SwitchButton } from "../SwithcButton";

const HalfAdderDashboard = observer(() => {
  return (
    <VStack spacing={8} alignItems="center" w="full">
      <VStack alignItems="flex-end" spacing={4} w={24}>
        <HStack>
          <SwitchButton
            isActive={halfAdder.A}
            onClickHandler={() => {
              halfAdder.setA(!halfAdder.A);
              halfAdder.add(halfAdder.A, halfAdder.B);
            }}
          />
          <Text>A</Text>
        </HStack>
        <HStack>
          <SwitchButton
            isActive={halfAdder.B}
            onClickHandler={() => {
              halfAdder.setB(!halfAdder.B);
              halfAdder.add(halfAdder.A, halfAdder.B);
            }}
          />
          <Text>B</Text>
        </HStack>
        <HStack alignItems="flex-start" w="full">
          <VStack>
            <Bulb isLit={halfAdder.carry} />
            <Text>Carry</Text>
          </VStack>
          <VStack>
            <Bulb isLit={halfAdder.sum} />
            <Text>Sum</Text>
          </VStack>
        </HStack>
      </VStack>
      <Button onClick={() => halfAdder.reset()}>Reset</Button>
    </VStack>
  );
});

export default HalfAdderDashboard;
