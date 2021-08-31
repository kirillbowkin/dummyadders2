import {
  Box,
  HStack,
  IconButton,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  useColorMode,
} from "@chakra-ui/react";

import NextLink from "next/link";
import BreadcrumbComponent from "./BreadcrumbComponent";
import NavbarStore from "../../store/NavbarStore";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

import {MdKeyboardArrowLeft} from 'react-icons/md'

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState("left");
  const { colorMode, toggleColorMode } = useColorMode();

  const bg = useColorModeValue("gray.200", "gray.700");

  return (
    <>
      <HStack
        p={4}
        w="full"
        alignItems="center"
        spacing={0}
        justifyContent="space-between"
        bg={bg}
      >
        <HStack spacing={4}>
          <IconButton
            icon={<GiHamburgerMenu />}
            color="gray.500"
            aria-label="Menu"
            onClick={onOpen}
          />
          <BreadcrumbComponent currentPage={NavbarStore.currentPage} />
        </HStack>
        <HStack>
          <ColorModeSwitcher />
        </HStack>
      </HStack>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <NextLink href="/">
            <DrawerHeader
              borderBottomWidth="1px"
              cursor="pointer"
              onClick={() => {
                NavbarStore.setCurrentPage("/");
                onClose();
              }}
            >
              <HStack alignItems='center' justifyContent='space-between'>
                <Text>Dummy Adders</Text>
                <IconButton icon={<MdKeyboardArrowLeft />} aria-label="Back"/>
              </HStack>
            </DrawerHeader>
          </NextLink>
          <DrawerBody>
            <Box onClick={onClose}>
              <Box py={2}>
                <NextLink href="/halfadder">
                  <Link
                    onClick={() => NavbarStore.setCurrentPage("Half Adder")}
                  >
                    <Text>Half Adder</Text>
                  </Link>
                </NextLink>
              </Box>
              <Box py={2}>
                <NextLink href="/fulladder">
                  <Link
                    onClick={() => NavbarStore.setCurrentPage("Full Adder")}
                  >
                    <Text>Full Adder</Text>
                  </Link>
                </NextLink>
              </Box>
              <Box py={2}>
                <NextLink href="/fourbitadder">
                  <Link
                    onClick={() => NavbarStore.setCurrentPage("Four Bit Adder")}
                  >
                    <Text>Four Bit Adder</Text>
                  </Link>
                </NextLink>
              </Box>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Navbar;
