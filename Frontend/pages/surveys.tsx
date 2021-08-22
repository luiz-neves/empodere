import type { NextPage } from 'next'
import Layout from '../components/layout'
import TabHeader from '../components/tabHeader'
import { MdAssignment } from 'react-icons/md'
import { Flex } from "@chakra-ui/react"

const Surveys: NextPage = () => {
  return (
    <Layout>
      <TabHeader
        icon={ MdAssignment }
        title="Pesquisas anônimas - Diversidade dentro da empresa"
      />
      <Flex height="80vh" alignItems="center" justifyContent="center">
      <iframe
        width="100%"
        height="100%"
        src='https://gabriel795201.typeform.com/to/VNIa0xmf'
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      </Flex>
    </Layout>
  )
}

export default Surveys
