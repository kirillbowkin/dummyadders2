import React from "react";

import { Breadcrumb, BreadcrumbItem, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { observer } from "mobx-react";

import NavbarStore from "../../store/NavbarStore";

const BreadcrumbComponent = observer(({ currentPage }) => {
  if (currentPage === "/") {
    return (
      <NextLink href="/">
        <Text cursor="pointer" fontSize="2xl">
          Dummy Adders
        </Text>
      </NextLink>
    );
  }
  return (
    <Breadcrumb >
      <BreadcrumbItem
        onClick={() => {
          NavbarStore.setCurrentPage("/");
        }}
      >
        <NextLink href="/">
          <Text cursor="pointer" fontSize={["sm", null, "xl", "2xl"]}>
            Dummy Adders
          </Text>
        </NextLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Text>{currentPage}</Text>
      </BreadcrumbItem>
    </Breadcrumb>
  );
});

export default BreadcrumbComponent;
