import {
  Box,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from '@chakra-ui/react'
import { useState } from 'react'

export default function RadioQuestion({text} : {text: string}) {
  const [value, setValue] = useState("")

  return (
    <Box p={4}>
      <Text>{text}</Text>
      <RadioGroup
        onChange={setValue}
        value={value}
      >
        <Stack direction="column">
          <Radio
            colorScheme="purple"
            value="1"
          >
              Verdadeiro
          </Radio>
          <Radio
            colorScheme="purple"
            value="2"
          >
              Falso
          </Radio>
        </Stack>
      </RadioGroup>
    </Box>
  )

}
