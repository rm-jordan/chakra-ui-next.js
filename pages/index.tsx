import { Container, Flex, VStack } from "@chakra-ui/react";
import Cart from "../src/sections/cart";
import Details from "../src/sections/details";

const IndexPage = () => 
  <Container maxW="container.xl" padding={0}>
    <Flex h="100vh" py={20}>
      <Details />
      <Cart />
    </Flex>
  </Container>

export default IndexPage;

      //py = padding y axis
      // bg = background "gray.50" <- design token from chakra UI