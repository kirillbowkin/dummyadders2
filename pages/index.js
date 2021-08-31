import { Text, VStack, Link, UnorderedList, ListItem } from "@chakra-ui/react";

import NextLink from "next/link";

import NavbarStore from "../store/NavbarStore";

export default function Home() {
  return (
    <VStack w="full" alignItems="center" justifyContent="center" spacing={8}>
      <VStack>
        <Text fontSize="4xl" fontWeight="bold">
          Dummy Adders
        </Text>
        <Text fontSize="2xl" fontWeight="semibold">
          Have Fun 😛
        </Text>
      </VStack>
      <UnorderedList>
        <ListItem>
          <NextLink href="/halfadder">
            <Link onClick={() => NavbarStore.setCurrentPage("Half Adder")}>
              <Text fontSize="xl">Half Adder</Text>
            </Link>
          </NextLink>
        </ListItem>
        <ListItem>
          <NextLink href="/fulladder">
            <Link onClick={() => NavbarStore.setCurrentPage("Full Adder")}>
              <Text fontSize="xl">Full Adder</Text>
            </Link>
          </NextLink>
        </ListItem>
        <ListItem>
          <NextLink href="/fourbitadder">
            <Link onClick={() => NavbarStore.setCurrentPage("Four Bit Adder")}>
              <Text fontSize="xl">Four Bit Adder</Text>
            </Link>
          </NextLink>
        </ListItem>
      </UnorderedList>
    </VStack>
  );
}
