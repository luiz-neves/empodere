import type { NextPage } from 'next'
import PathCard from '../components/pathCard'
import Layout from '../components/layout'
import TabHeader from '../components/tabHeader'
import { MdMap } from 'react-icons/md'
import { Flex } from "@chakra-ui/react"

const pathData = [
  {
    imgAlt: 'reuniao',
    imgSrc: '1.png',
    videoUrl: 'https://www.youtube.com/embed/ZCGLC-vziRc',
    title: 'Igualdade de gênero',
    videoCount: 2,
    hours: 1,
    quizzes: 1,
    href: 'igualdade-de-genero',
    started: true,
  },
  {
    imgAlt: 'reuniao',
    imgSrc: '4.png',
    videoUrl: 'https://www.youtube.com/embed/ZCGLC-vziRc',
    title: 'Igualdade de raça',
    videoCount: 6,
    hours: 1,
    quizzes: 4,
    href: '',
  }
]

const Login: NextPage = () => {
  return (
    <div>
      <Layout>
        <TabHeader
          icon={ MdMap }
          title="Trilhas"
        />
        <Flex mt="20" alignItems="center" justifyContent="center">
          <PathCard path={pathData[0]} />
        </Flex>
        <Flex mt="20" alignItems="center" justifyContent="center">
          <PathCard path={pathData[1]} />
        </Flex>
      </Layout>
    </div>
  )
}

export default Login
