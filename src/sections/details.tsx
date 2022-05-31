import { VStack , Heading, Text, SimpleGrid, GridItem, FormControl, FormLabel, Input, Select, Checkbox, Button} from "@chakra-ui/react";

const Details = () => {
  return (
  <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
    <VStack spacing={3} alignItems="flex-start">
      <Heading size="2xl">Your details</Heading>
        <Text> If you already have an account, click here to log in.</Text>
        <SimpleGrid columns={2} columnGap={3} rowGap={6} width="full">
          <GridItem colSpan={1}>
            <FormControl>
              <FormLabel>First Name</FormLabel>
              <Input placeholder="Ryan" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl>
              <FormLabel>Last Name</FormLabel>
              <Input placeholder="Jordan" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl>
              <FormLabel>Address</FormLabel>
              <Input placeholder="123 Your Place Pl." />
            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl>
              <FormLabel>City</FormLabel>
              <Input placeholder="Pawnee" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl>
              <FormLabel>Country</FormLabel>
                <Select>
                  <option value='Canada'>Canada</option>
                  <option value='Usa'>United States of America</option>
                  <option value='CR'>Costa Rica</option>
                  <option value='Eng'>England</option>
                </Select>
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <Checkbox defaultChecked>Ship to billing address</Checkbox>
          </GridItem>
          <GridItem colSpan={2}>
            <Button size='lg' width='full'>Place Order</Button>
          </GridItem>
        </SimpleGrid>
      </VStack>
  </VStack>
  )
}

export default Details;

//spacing = 4x # given ex: spacing={10} = 4 x {10px}= 40px