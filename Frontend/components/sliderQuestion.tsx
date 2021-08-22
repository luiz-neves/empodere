import {
  Box,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
} from '@chakra-ui/react'
import { useState } from 'react'

export default function RadioQuestion() {
  const [value, setValue] = useState(0)

  return (
    <Box p={4}>
      <Text>2. Qual a percentagem de mulheres na população brasileira?</Text>
      <Slider aria-label="slider-ex-1" min={0} max={100} defaultValue={0} step={1} onChange={setValue}>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
      <Text>Sua reposta: {value}%</Text>
    </Box>
  )

}
