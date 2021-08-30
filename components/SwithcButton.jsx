import { observer } from "mobx-react-lite";
import React from "react";
import { IoMdRadioButtonOff, IoMdRadioButtonOn } from "react-icons/io";
import { IconButton } from "@chakra-ui/react";

export const SwitchButton = observer(({ onClickHandler, isActive }) => {
  return (
    <IconButton
      onClick={onClickHandler}
      icon={isActive ? <IoMdRadioButtonOn /> : <IoMdRadioButtonOff />}
    />
  );
});
