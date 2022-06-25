import { Box } from '@chakra-ui/react';
import React from 'react';

const ErrorMessage = ({ children }) => {
  return (
    <Box
      border="1px"
      borderColor="gray.200"
      backgroundColor="#C34143"
      color="#fff"
      borderRadius="md"
    >
      {children}
    </Box>
  );
};

export default ErrorMessage;
