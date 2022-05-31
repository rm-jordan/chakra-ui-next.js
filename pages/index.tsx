import { Container, Flex, VStack } from "@chakra-ui/react";
import Cart from "../src/sections/cart";
import Details from "../src/sections/details";

const IndexPage = () => 
  <Container maxW="container.xl" padding={0}>
    <Flex h={{base:'auto', md:'100vh'}} py={[0,10,20]} direction={{base: 'column-reverse', md:'row'}}>
      <Details />
      <Cart />
    </Flex>
  </Container>

export default IndexPage;

      //py = padding y axis
      // bg = background "gray.50" <- design token from chakra UI
      // responsive elements can be adjusted by using an array see ex: py={[0,10,20]}
      // responsive elements can also be set using an object, see above direction example direction={{base:.....}}

