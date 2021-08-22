import React from 'react';
import {
  Flex, 
  Text,
  Divider,
} from '@chakra-ui/react';

export default function Question(
  {
    icon,
    title = 'Titulo'
  }: {
    icon: any,
    title: String
  }) {
  return (
    <>
    <Flex align="center">
      <Text fontSize="2xl">{title}</Text>
    </Flex>
    <Divider mb="5" mt="2" colorScheme="blackAlpha"/>
    </>
    )
}
