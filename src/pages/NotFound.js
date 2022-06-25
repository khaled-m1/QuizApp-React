import { Flex, Image } from '@chakra-ui/react';
import React from 'react';
import NotFoundImg from '../img/404.svg';
const NotFound = () => {
  return (
    <div>
      <Flex height="82vh" alignItems="center" justify="center" width="100%">
        <Image src={NotFoundImg} width="100%" height="400px"></Image>
      </Flex>
    </div>
  );
};

export default NotFound;
