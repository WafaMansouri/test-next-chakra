"use client";

import {
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

export default function CardProduct({ product }: any) {
  return (
    <Card width={400} margin={6}>
      <CardBody>
        {/* image product */}
        {product.images?.length && (
          <Flex justifyContent="center">
            <Image
              src={product.images[0]}
              alt="Green double couch with wooden legs"
              borderRadius="lg"
              height={200}
              marginBottom={10}
            />
          </Flex>
        )}

        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Heading size="xs" textTransform="uppercase">
              {product.title}
            </Heading>
            {/* description */}
            <Text pt="2" fontSize="sm">
              {product.description}
            </Text>
            {/* price */}
            <Text color="blue.600" fontSize="2xl">
              ${product.price}
            </Text>
            {/* rating */}
            <HStack spacing={2}>
              <HStack spacing={1}>
                {[0, 1, 2, 3, 4, 5].map((index) => (
                  <Icon
                    key={index}
                    as={FaStar}
                    color={
                      index < (product.rating || 0) ? "yellow.400" : "gray.200"
                    }
                  />
                ))}
              </HStack>
              <Text fontSize="sm" color="gray.500">
                ({product.rating})
              </Text>
            </HStack>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
}
