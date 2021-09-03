import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  IconButton,
  Link,
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdKeyboardArrowLeft } from "react-icons/md";
import BreadcrumbComponent from "./BreadcrumbComponent";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState("left");
  const { colorMode, toggleColorMode } = useColorMode();

  const bg = useColorModeValue("gray.200", "gray.700");

  const currentPageByPath = {
    halfadder: "Half Adder",
    fulladder: "Full Adder",
    fourbitadder: "Four Bit Adder",
  };

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
          <BreadcrumbComponent currentPage={currentPageByPath} />
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
              onClick={onClose}
            >
              <HStack alignItems="center" justifyContent="space-between">
                <Text>Dummy Adders</Text>
                <IconButton icon={<MdKeyboardArrowLeft />} aria-label="Back" />
              </HStack>
            </DrawerHeader>
          </NextLink>
          <DrawerBody>
            <Box onClick={onClose}>
              <Box py={2}>
                <NextLink href="/halfadder">
                  <Link>
                    <Text>Half Adder</Text>
                  </Link>
                </NextLink>
              </Box>
              <Box py={2}>
                <NextLink href="/fulladder">
                  <Link>
                    <Text>Full Adder</Text>
                  </Link>
                </NextLink>
              </Box>
              <Box py={2}>
                <NextLink href="/fourbitadder">
                  <Link>
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
