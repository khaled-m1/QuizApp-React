import {
  Flex,
  HStack,
  VStack,
  Text,
  Input,
  Select,
  Button,
  Image,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import HeroImg from '../img/imgHome.svg';
import Categories from '../Data/Categories';
import { useNavigate } from 'react-router-dom';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import Header from '../components/Header/Header';

const Home = ({ name, setName, fetchQuestions }) => {
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!category || !difficulty || !name) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestions(category, difficulty);
      navigate('/quiz');
    }
  };
  return (
    <div>
      <Header />
      <HStack spacing="0" h="70vh">
        <Flex height="82vh" alignItems="center" justify="center" width={['100%','50%']}>
          <VStack w="50%" align="stretch">
            <Text fontSize="5xl">Quiz Settings ⚙️</Text>
            {/* input text */}
            {error && <ErrorMessage>Enter fill the feilds</ErrorMessage>}

            <Input
              placeholder="Enter Your name"
              onChange={e => setName(e.target.value)}
            />
            {/* Select 1 Category */}
            <Select
              placeholder="Select Category"
              onChange={e => setCategory(e.target.value)}
              value={category}
            >
              {Categories.map(cat => (
                <option key={cat.category} value={cat.value}>
                  {cat.category}
                </option>
              ))}
            </Select>
            {/* Select 2 Difficulty */}
            <Select
              placeholder="Select Difficulty"
              value={difficulty}
              onChange={e => setDifficulty(e.target.value)}
            >
              <option key="Easy" value="easy">
                Easy
              </option>
              <option key="Medium" value="medium">
                Medium
              </option>
              <option key="Hard" value="hard">
                Hard
              </option>
            </Select>
            {/*  btn */}
            <Button
              colorScheme="white"
              variant="outline"
              onClick={handleSubmit}
            >
              Start
            </Button>
          </VStack>
        </Flex>
        {/* Secound section */}
        <Flex height="82vh" alignItems="center" justify="center" width={['0%','50%']}>
          <Image src={HeroImg} width="100%" height="400px"></Image>
        </Flex>
      </HStack>
    </div>
  );
};

export default Home;
