import type { NextPage } from 'next'
import Layout from '../components/layout'
import TabHeader from '../components/tabHeader'
import { AiOutlineBarChart } from 'react-icons/ai'
import { Flex, Grid, Tooltip } from '@chakra-ui/react'
import PieChartDash from '../components/pieChartDash'
import BarChartDash from '../components/barChartDash'
import LineChartDash from '../components/lineChartDash'

const Dashboards: NextPage = () => {
  const gender = [
    { name: 'Masculino', data1: 50 },
    { name: 'Feminino', data1: 30 },
    { name: 'Intersexo', data1: 4 },
    { name: 'Outros', data1: 4 },
  ]

  const genderLeadershipPosition = [
    {
      name: '2018',
      data1: 50,
      male: 1,
      female: 2,
      intersex: 5,
      others: 3
    },
    {
      name: '2019',
      data1: 30,
      male: 2,
      female: 1,
      intersex: 3,
      others: 2
    },
    {
      name: '2020',
      data1: 4,
      male: 3,
      female: 6,
      intersex: 3,
      others: 4
    },
    {
      name: '2021',
      data1: 4,
      male: 1,
      female: 5,
      intersex: 2,
      others: 7
    },
  ]

  const pwd = [
    { name: 'Deficiente visual', data1: 6 },
    { name: 'Deficiente mental', data1: 7 },
    { name: 'Autismo', data1: 4 },
    { name: 'Outros', data1: 1 },
  ]

  return (
    <Layout>
      <TabHeader
        icon={ AiOutlineBarChart }
        title="Dashboards"
      />
      <Flex
        wrap="wrap"
      >
        <PieChartDash
          title="Sexo"
          data={gender}
        />
        <LineChartDash
          title="Sexo em cargo de liderança"
          data={genderLeadershipPosition}
        /> 
        <BarChartDash
          title="PCD"
          data={pwd}
        />
      </Flex>
    </Layout>
  )
}

export default Dashboards
