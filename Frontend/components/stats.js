import React from 'react'
import {
  Box, Heading, Progress, Icon, Text, Square, Image, Flex, Divider,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { MdTrendingFlat } from 'react-icons/md'


const Stats = ({ path }) => {
  const router = useRouter()
  const hours = 3
  const courses = 4
  const threads = 7

  return (
    <Flex direction="row" mt="20">
      <Flex width="35vw" direction="column" alignItems="center" justifyContent="center">
        <Heading size="md" mb="4">Status</Heading>
        <Box
          borderWidth="1"
          borderRadius="xl"
          height="300px"
          boxShadow="lg"
          bg="white"
          width="300px"
        >
          <Flex ml="5" direction="column">
            <Flex mt="10" direction="column">
              <Text>Horas estudadas</Text>
              <Text fontSize="2xl">{hours} Hora(s)</Text>
            </Flex>
            <Divider my="2" width="250px" />
            <Flex direction="column">
              <Text>Cursos concluídos</Text>
              <Text fontSize="2xl">{courses} Curso(s)</Text>
            </Flex>
            <Divider my="2" width="250px" />
            <Flex direction="column">
              <Text>Threads envolvidas</Text>
              <Text fontSize="2xl">{threads} Thread(s)</Text>
            </Flex>
          </Flex>
        </Box>
      </Flex>
      <Flex width="35vw" direction="column" alignItems="center" justifyContent="center">
        <Heading size="md" mb="4">Conquistas</Heading>
        <Box
          borderWidth="1"
          borderRadius="xl"
          height="300px"
          boxShadow="lg"
          bg="white"
          width="300px"
        >
          <Image mt="2" borderTopRadius="xl" src={`/badges.png`} alt='reuniao' />
        </Box>
      </Flex>
    </Flex>
  )
}

export default Stats
