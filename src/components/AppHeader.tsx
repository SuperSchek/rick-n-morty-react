import {
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Searchbar from '../components/Searchbar';

const Header = styled.header`
  margin-block-end: 20px;
  background-color: #000;
`;

function AppHeader() {
  return (
    <Header>
      <Container maxWidth="container.xl" height="50px">
        <Grid templateColumns="repeat(3, 1fr)" height="100%">
          <GridItem>
            <Flex align="flex-end" height="100%">
              <Link to="/">
                <Heading colorScheme="white">RMdb</Heading>
              </Link>
              <Text fontSize="sm">(Rick &amp; Morty Database)</Text>
            </Flex>
          </GridItem>
          <GridItem colStart={3}>
            <Flex align="center" height="100%">
              <Searchbar />
            </Flex>
          </GridItem>
        </Grid>
      </Container>
    </Header>
  );
}

export default AppHeader;
