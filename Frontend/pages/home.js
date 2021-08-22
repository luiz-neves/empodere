import React, { useState, useEffect } from 'react'
import Layout from '../components/layout'
import TabHeader from '../components/tabHeader'
import { MdMap } from 'react-icons/md'
import PathCardIncomplete from '../components/pathCardIncomplete'
import Stats from '../components/stats'
import { Heading, Flex, Divider, Center } from '@chakra-ui/react'
import api from '../lib/api'

const Home = () => {
  const [incompletePath, setIncompletePath] = useState({
    title: 'Igualdade de gênero',
    percentage: 33,
    href: '/paths/igualdade-de-genero',
    img: '1.png',
  })
  const nextPath = {
    title: 'Igualdade de raça',
    percentage: 0,
    href: '/paths/igualdade-de-genero',
    img: '4.png',
  }
  const [stats, setStats] = useState({
    hours: 0,
    threads: 0,
    finishedPaths: 1,
  })
  const updateUserStats = async () => {
    const { data: user } = await api.user.get()
    setIncompletePath({
      title: 'Igualdade de gênero',
      percentage: user.percent,
      href: '/paths/igualdade-de-genero',
      img: '1.png',
    })
    setStats({
      hours: user.hours,
      threads: user.threads,
      finishedPaths: user.finishedPaths,
    })
  }

  useEffect(() => {
    updateUserStats()
  }, [])

  return (
    <>
      <Layout>
        <TabHeader
          icon={ MdMap }
          title="Olá, Isabelle!"
        />
        <Flex>
          <Flex width="35vw" direction="column" alignItems="center" justifyContent="center">
            <Heading size="md" mb="4">Última trilha acessada</Heading>
            <PathCardIncomplete path={incompletePath} />
          </Flex>
          <Center mt="10" height="300px">
            <Divider orientation="vertical" />
          </Center>
          <Flex width="35vw" direction="column" alignItems="center" justifyContent="center">
            <Heading size="md" mb="4">Próxima trilha</Heading>
            <PathCardIncomplete path={nextPath} />
          </Flex>
        </Flex>
        <Flex><Stats /></Flex>
      </Layout>
    </>
  )
}

export default Home
