import React, { useState } from 'react';
import {
  Box,
  Button,
  ButtonGroup,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Questions = ({
  currQuestions,
  setcurrQuestions,
  questions,
  options,
  correct,
  score,
  setScore,
}) => {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);
  const [cls, setCls] = useState('');
  const navigate = useNavigate();

  const handleSelect = i => {
    if (selected === i && selected === correct) {
      // return 'green';
      return 'red';
    } else if (selected === i && selected !== correct) {
      return 'green';
    } else if (i === correct) {
      return 'red';
    }
  };
  const handleCheck = i => {
    setSelected(i);

    if (i === correct) setScore(score + 1);
    setError(false);
    setCls = cls => (cls === 'green' ? 'red' : 'green');
  };
  const handleNext = () => {
    if (currQuestions > 8) {
      navigate('/result');
    } else if (selected) {
      setcurrQuestions(currQuestions + 1);
      setSelected();
    } else {
      setError('Select an option first :)');
    }
  };
  const handleQuit = () => {};
  function Feature({ desc, ...rest }) {
    return (
      <Box p={5} shadow="md" borderWidth="1px" {...rest}>
        <Text mt={4}>{desc}</Text>
      </Box>
    );
  }
  return (
    <>
      <style>{`
        .red {color: #48C14B}
        .green {color: #C34143}
      `}</style>
      <VStack >
        <Box h="100px">
          <Text fontSize="4xl">Questions {currQuestions + 1} 💡</Text>
        </Box>
      </VStack>

      <VStack h="60vh">
        <Box>{error && <ErrorMessage>{error}</ErrorMessage>}</Box>
        {/* Questions */}
        <Box height={['160px','110px']}>
          <Stack spacing={8} direction="row">
            <Feature desc={questions[currQuestions].question} />
          </Stack>
        </Box>

        {/* btn answer */}
        <Box height={['100px','50px']}>
          {options &&
            options.map(i => (
              <ButtonGroup gap="4">
                <Button
                  onClick={() => handleCheck(i)}
                  // colorScheme="gray"
                  variant="outline"
                  key={i}
                  disabled={selected}
                  className={`singleOption ${selected && handleSelect(i)}`}
                >
                  {i}
                </Button>
              </ButtonGroup>
            ))}
        </Box>
        {/* section to group btn */}
        <Box h="100px">
          <ButtonGroup gap="2">
            <Button variant="outline" onClick={handleQuit} colorScheme="red">
              <Link to="/">Quit</Link>
            </Button>
            <Button onClick={handleNext} colorScheme="teal" variant="outline">
              Next Questions
            </Button>
          </ButtonGroup>
        </Box>
      </VStack>
    </>
  );
};

export default Questions;
