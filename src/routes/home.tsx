import { Container, Flex, Heading, Text } from '@chakra-ui/react';

function Home() {
  return (
    <Flex align="center" height="calc(100vh - 70px)">
      <Container>
        <Heading size="xl" paddingBlockEnd={5}>Welcome to RMdb!</Heading>
        <Text>
          This is a fake project. Hence the empty homepage.
          Please use the searchbar in the header to find anything Rick &amp; Morty!
        </Text>
      </Container>
    </Flex>
  );
}

export default Home;
