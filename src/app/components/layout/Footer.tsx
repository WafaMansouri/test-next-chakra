import { Flex } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Flex
      minWidth={"100vw"}
      height={"2em"}
      padding={10}
      backgroundColor="blue.500"
      fontSize={24}
      //   minHeight="100vh"
      flexDirection={"row"}
      gap={5}
      color="white"
    >
      MANSOURI Wafa
    </Flex>
  );
}
