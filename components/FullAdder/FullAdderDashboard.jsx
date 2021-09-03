import { observer } from "mobx-react-lite";
import React from "react";
import { Button, HStack, VStack, Text } from "@chakra-ui/react";
import { SwitchButton } from "../SwithcButton";
import fullAdder from "../../store/FullAdder";
import Bulb from "../Bulb";

const FullAdderDashboard = observer(() => {
  return (
    <VStack spacing={8} alignItems="center" w="full">
      <VStack alignItems="flex-end" spacing={4} w={28}>
        <HStack>
          <SwitchButton
            isActive={fullAdder.Cin}
            onClickHandler={() => {
              fullAdder.setCin(!fullAdder.Cin);
              fullAdder.add(fullAdder.Cin, fullAdder.A, fullAdder.B);
            }}
          />
          <Text>Cin</Text>
        </HStack>
        <HStack spacing={5}>
          <SwitchButton
            isActive={fullAdder.A}
            onClickHandler={() => {
              fullAdder.setA(!fullAdder.A);
              fullAdder.add(fullAdder.Cin, fullAdder.A, fullAdder.B);
            }}
          />
          <Text>A</Text>
        </HStack>
        <HStack spacing={5}>
          <SwitchButton
            isActive={fullAdder.B}
            onClickHandler={() => {
              fullAdder.setB(!fullAdder.B);
              fullAdder.add(fullAdder.Cin, fullAdder.A, fullAdder.B);
            }}
          />
          <Text>B</Text>
        </HStack>
        <HStack alignItems="flex-start" w="full" pl={2}>
          <Bulb isLit={fullAdder.Cout} />
          <Bulb isLit={fullAdder.sum} />
        </HStack>
      </VStack>
      <Button onClick={() => fullAdder.reset()}>Reset</Button>
    </VStack>
  );
});

export default FullAdderDashboard;
