import { Box, Center, Flex, Text } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { Bar, BarChart, CartesianGrid, Legend, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts'

export default function BarChartDash({ 
  title,
  data,
}: {
  title: String
  data: any[]
}) {
  return (
    <Box
      d="flex"
      m={2}
    >
      <Flex
        shrink={2}
        p={4}
        borderRadius="xl"
        direction="column"
        bg="white"
        align="center"
      >
        <Text fontSize="4xl">{ title }</Text>
        <BarChart width={1000} height={250} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="data1" fill="#8884d8" />
        </BarChart>
      </Flex>
    </Box>
  )
}
