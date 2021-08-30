import { Button, HStack, IconButton,  VStack } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import React from "react";

import halfAdder from "../../store/HalfAdder";
import Bulb from "../Bulb";
import { SwitchButton } from "../SwithcButton";

const HalfAdderDashboard = observer(() => {
  return (
    <VStack spacing={8} alignItems='flex-end'>
      <VStack alignItems='flex-end' spacing={4}>
          <HStack>
            <SwitchButton
              isActive={halfAdder.A}
              onClickHandler={() => {
                  halfAdder.setA(!halfAdder.A)
                  halfAdder.add(halfAdder.A, halfAdder.B)
            }}
            />
          </HStack>
          <HStack>
            <SwitchButton
              isActive={halfAdder.B}
              onClickHandler={() => {
                  halfAdder.setB(!halfAdder.B)
                  halfAdder.add(halfAdder.A, halfAdder.B)
                }}
            />
          </HStack>
          <HStack>
                <Bulb isLit={halfAdder.carry}/>
                <Bulb isLit={halfAdder.sum}/>
          </HStack>
      </VStack>
        <Button onClick={() => halfAdder.reset()}>
            Reset
        </Button>
    </VStack>
  );
});

export default HalfAdderDashboard;
