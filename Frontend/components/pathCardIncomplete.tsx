import React from 'react'
import {
  Box, Heading, Progress, Icon, Text, Square, Image,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { MdTrendingFlat } from 'react-icons/md'
interface Path {
  title: string
  percentage: number
  href: string
  img: string
}

const PathCard = ({ path }: { path: Path }) => {
  const router = useRouter()

  return (
    <Box
      borderWidth="1"
      borderRadius="xl"
      height="325px"
      boxShadow="lg"
      bg="white"
      width="225px"
      onClick={() => router.push(path.href)}
      cursor="pointer"
    >
      <Square height="225px" size="225px">
        <Image borderTopRadius="xl" src={`/${path.img}`} alt='reuniao' />
      </Square>
      <Box p="3" height="100px" width="225px">
        <Heading size="sm" mb="5">{path.title} <Icon as={MdTrendingFlat}/></Heading>
        <Text color="teal">{path.percentage}% completo</Text>
        <Progress hasStripe value={path.percentage} colorScheme="teal" />
        
      </Box>
    </Box>
  )
}

export default PathCard
