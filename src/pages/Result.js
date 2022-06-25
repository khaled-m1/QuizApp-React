import { Box, VStack, Text, Button } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
const Result = ({ name, score }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!name) {
      navigate('/');
    }
  }, [name]);
  return (
    <VStack h="40vh">
      <Box h="100px">
        <Text fontSize="5xl">Score: {score} 🎉</Text>
      </Box>
      <Box h="100px">
        <Button>
          <Link to="/">Back to Home</Link>
        </Button>
      </Box>
    </VStack>
  );
};

export default Result;
