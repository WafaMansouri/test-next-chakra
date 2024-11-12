import { Flex, Link } from "@chakra-ui/react";
export default function NavBar() {
  return (
    <Flex
      minWidth={"100vw"}
      height={"2em"}
      padding={10}
      backgroundColor="blue.500"
      fontSize={20}
      flexDirection={"row"}
      alignItems={"center"}
      gap={5}
    >
      <Link href="/products" color="white">
        List Products
      </Link>
      <Link href="/about-us" color="white">
        About Us
      </Link>
    </Flex>
  );
}
