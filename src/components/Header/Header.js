import { Box, VStack, Text } from '@chakra-ui/react';
import React from 'react';

const Header = () => {
  return (
    <div>
      <VStack>
        <Box h="100px">
          <Text fontSize="5xl">Welcome to Quiz App</Text>
        </Box>
      </VStack>
    </div>
  );
};

export default Header;
