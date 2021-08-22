import {
  Box,
  Flex,
  Text,
} from '@chakra-ui/react'
import { ReactNode } from 'react'
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts'

export default function LineChartDash({ 
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
        <LineChart width={730} height={250} data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="male"
            stroke="#8884d8"
            name="Masculino"
          />
          <Line
            type="monotone"
            dataKey="female"
            stroke="#82ca9d"
            name="Feminino"
          />
          <Line
            type="monotone"
            dataKey="intersex"
            stroke="#F09186"
            name="Intersexo"
          />
          <Line
            type="monotone"
            dataKey="others"
            stroke="#C421CC"
            name="Outros"
          />
        </LineChart>
      </Flex>
    </Box>
  )
}
