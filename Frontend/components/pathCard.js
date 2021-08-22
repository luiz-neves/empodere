import React from 'react';
import {
  Box,
  Square,
  Flex,
  Heading,
  Text,
  Image,
  Button,
  Spacer,
  Icon,
  Link,
} from '@chakra-ui/react';
import { MdAvTimer, MdPlayCircleOutline, MdCreate } from 'react-icons/md'



const PathCard = ({ path }) => {
  const {
    imgAlt,
    imgSrc,
    height = '300px',
    title,
    videoCount,
    hours,
    quizzes,
    href,
    started,
  } = path
  return (
    <Box
      borderWidth="1"
      borderRadius="xl"
      overflow="hidden"
      height={height}
      width="40vw"
      boxShadow="lg"
    >
      <Flex>
        <Square height={height} size={height}>
          <Image borderLeftRadius="xl" src={`/${imgSrc}`} alt={imgAlt} />
        </Square>
        <Box p="15" height={height} flex="1" bg="white">
          <Heading size="md">
            {title}
          </Heading>
          <Flex mt="8">
            <Icon as={MdAvTimer}/><Text mt="-1" ml="1">{hours} Hora(s)</Text>
          </Flex>
          <Flex mt="3">
            <Icon as={MdPlayCircleOutline}/><Text mt="-1" ml="1">{videoCount} Videos</Text>
          </Flex>
          <Flex mt="3">
            <Icon as={MdCreate}/><Text mt="-1" ml="1">{quizzes} Questionário(s)</Text>
          </Flex>
          <Flex mt="20" justify="flex-end">
            <Spacer />
            <Link href={`paths/${href}`}>
              <Button mt="0" colorScheme="teal" size="lg" width="110px">
                {started ? 'Continuar' : 'Iniciar'}
              </Button>
            </Link>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}

export default PathCard
