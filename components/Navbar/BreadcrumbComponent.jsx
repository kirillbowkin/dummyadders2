import { Breadcrumb, BreadcrumbItem, Text } from "@chakra-ui/react";
import { observer } from "mobx-react";
import { useRouter } from "next/dist/client/router";
import NextLink from "next/link";
import React from "react";

const BreadcrumbComponent = observer(({ currentPage }) => {
  const router = useRouter();
  console.log(router.pathname);

  if (router.pathname === "/") {
    return (
      <NextLink href="/">
        <Text cursor="pointer" fontSize="2xl">
          Dummy Adders
        </Text>
      </NextLink>
    );
  }
  return (
    <Breadcrumb>
      <BreadcrumbItem>
        <NextLink href="/">
          <Text cursor="pointer" fontSize={["sm", null, "xl", "2xl"]}>
            Dummy Adders
          </Text>
        </NextLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Text>{currentPage[router.pathname.substring(1)]}</Text>
      </BreadcrumbItem>
    </Breadcrumb>
  );
});

export default BreadcrumbComponent;
