import React, { useEffect, useState } from 'react';
import { Text, Spinner, Box, VStack, HStack } from '@chakra-ui/react';
import Questions from '../components/Questions/Questions';

const Quiz = ({ name, questions, score, setScore }) => {
  const [options, setOptions] = useState();
  const [currQuestions, setcurrQuestions] = useState(0);

  useEffect(() => {
    setOptions(
      questions &&
        handleShuffle([
          questions[currQuestions]?.correct_answer,
          ...questions[currQuestions]?.incorrect_answers,
        ])
    );
  }, [questions, currQuestions]);

  console.log(options);

  const handleShuffle = options => {
    return options.sort(() => Math.random() - 0.5);
  };
  return (
    <VStack >
      <VStack >
        <Box>
          <Text fontSize="4xl">Hey, {name} 🧠</Text>
        </Box>
      </VStack>
      {questions ? (
        <>
          <VStack>
            <Box bg="lightgray" height="40px" width="250px">
              <Text> {questions[currQuestions].category}</Text>
            </Box>
            <Box bg="lightgray" height="40px" width="250px">
              <Text> Score : {score}</Text>
            </Box>
          </VStack>

          <Questions
            currQuestions={currQuestions}
            setcurrQuestions={setcurrQuestions}
            questions={questions}
            options={options}
            correct={questions[currQuestions]?.correct_answer}
            score={score}
            setScore={setScore}
          />
        </>
      ) : (
        <Spinner size="lg" />
      )}
    </VStack>
  );
};

export default Quiz;
