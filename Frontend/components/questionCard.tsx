import React, { useState } from 'react';
import {
  Box, 
  Button,
  Input, 
  Text,
} from '@chakra-ui/react';

export default function Question({
  question,
  onAnswer,
}: {
  question: String,
  onAnswer: Function,
}) {
  const [answer, setAnswer] = useState('');
  const onInputChange = (event: any) => setAnswer(event.target.value)
  const onInputSubmit = (event: any) => setAnswer('')

  return (
    <Box
      bg="white"
      w="90%"
      p={4}
      mt={2}
    >
      <Text>{ question }</Text>
      <Input
        value={ answer }
        mt={2}
        placeholder="Pelo que eu entendi..."
        onChange={ onInputChange }
        onSubmit={ onInputSubmit }
      />
      {answer.length > 0 && <Button
        mt={2}
        colorScheme="blue"
        onClick={ () => onAnswer() }
      >
        ENVIAR
      </Button>}
    </Box>
  )
}
