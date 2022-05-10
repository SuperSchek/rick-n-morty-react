import { Avatar, Flex, ListItem, Text } from '@chakra-ui/react';

interface Props {
  title: string;
  imageUrl?: string;
}

function AutocompleteItem({ title, imageUrl }: Props) {
  return (
    <ListItem paddingBlockEnd={2}>
      <Flex align="center">
        {imageUrl && <Avatar src={imageUrl} marginInlineEnd={3} />}
        <Text>{title}</Text>
      </Flex>
    </ListItem>
  );
}

export default AutocompleteItem;
