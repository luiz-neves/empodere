import type { NextPage } from 'next'
import PathVideoLine from '../../components/pathVideoLine'
import PathQuizLine from '../../components/pathQuizLine'
import Layout from '../../components/layout'
import TabHeader from '../../components/tabHeader'
import { MdMap } from 'react-icons/md'
import { Flex } from "@chakra-ui/react"

const pathData = {
  imgAlt: 'reuniao',
  imgSrc: 'https://www.anchieta.br/hubfs/imagens-blogposts/P%C3%B3s/reuni%C3%A3o%20produtiva.jpg',
  videoUrl: 'https://www.youtube.com/embed/ZCGLC-vziRc',
  title: 'Igualdade de gênero PORRA',
  text: `olá esse é um texto dasdsafasdsapldpsa dasdsaidasihdisadjhi aidj iasjdija sidsikaj idjasijdisajdi`,
  videoCount: 5,
  hours: 4,
  quizzes: 3,
}

const Login: NextPage = () => {
  return (
    <div>
      <Layout>
        <TabHeader
          icon={ MdMap }
          title="Trilha - Igualdade de Gênero"
        />
        <Flex mt="5" alignItems="center" justifyContent="center">
          <PathVideoLine
            videoUrl={pathData.videoUrl}
            imageAlt={pathData.imgAlt}
            imageSrc="/1.png"
            title={"1. Histórico do direito das mulheres"}
            description={"Nesse vídeo você entenderá mais sobre o histórico do direito das mulheres"}
          />
        </Flex>
        <Flex mt="5" alignItems="center" justifyContent="center">
          <PathVideoLine
            videoUrl={pathData.videoUrl}
            imageAlt={pathData.imgAlt}
            imageSrc="/2.png"
            title={"2. Direito das mulheres na atualidade"}
            description={"Nesse vídeo você conhecerá os direito das mulheres na sociedade atual"}
          />
        </Flex>
        <Flex mt="5" alignItems="center" justifyContent="center">
          <PathQuizLine
            imageAlt={pathData.imgAlt}
            imageSrc="/5.png"
            title={"3. QUIZ - Direito das mulheres"}
            description={"Nesse quiz vc irá reponder perguntas sobre o conteúdo da trilha"}
          />
        </Flex>
      </Layout>
    </div>
  )
}

export default Login
