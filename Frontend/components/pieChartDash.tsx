import { Box, Center, Flex, Text } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { Legend, Pie, PieChart, Tooltip } from 'recharts'

export default function PieChartDash({ 
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
        <PieChart
          width={300}
          height={250}
        >
          <Tooltip />
          <Pie
            data={data}
            dataKey="data1"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#82ca9d"
            label
          />
        </PieChart>
      </Flex>
    </Box>
  )
}
