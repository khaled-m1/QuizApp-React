import React, { useState } from 'react';
import { ChakraProvider, Box, Grid, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import NotFound from './pages/NotFound';

function App() {
  const [name, setName] = useState();
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = async (category = '', difficulty = '') => {
    const request = await fetch(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );
    const data = await request.json();
    setQuestions(data.results);
  };
  return (
    <ChakraProvider resetCSS theme={theme}>
      <BrowserRouter>
        <Box textAlign="center" fontSize="xl">
          <Grid minH="100vh" p={0}>
            <ColorModeSwitcher justifySelf="flex-end" />
      
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    name={name}
                    setName={setName}
                    fetchQuestions={fetchQuestions}
                  />
                }
              />
              <Route
                path="/quiz"
                element={
                  <Quiz
                    name={name}
                    questions={questions}
                    score={score}
                    setScore={setScore}
                    setQuestions={setQuestions}
                  />
                }
              />
              <Route
                path="/result"
                element={<Result name={name} score={score} />}
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Grid>
        </Box>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
