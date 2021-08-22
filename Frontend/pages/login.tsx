import { useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Button, Flex, Heading, Input, Icon } from "@chakra-ui/react"
import { MdTrendingFlat } from 'react-icons/md'
import api from '../lib/api'

const Login = () => {
  const router = useRouter()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [isLoading, setIsLoading] = useState(false)

  const login = async () => {
    setIsLoading(true)
    try {
      await api.auth.post({
        username,
        password,
      })
      setIsLoading(false)
      router.push('home')
    } catch {
      setIsLoading(false)
      alert('Credenciais Inválidas')
    }
  }

  const handleKeyPress = ({ key }: { key: string }) => {
    if (key !== 'Enter') return
    login()
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Entrar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Flex height="100vh" alignItems="center" justifyContent="center">
        <Flex direction="column" background="gray.100" p={12} rounded={5}>
          <Heading mb={5}>Login</Heading>
          <Input
            placeholder="Email"
            variant="outline"
            type="email"
            mb="2"
            onChange={(event) => setUsername(event.target.value)}
            onKeyPress={handleKeyPress}
          />
          <Input
            placeholder="Senha"
            variant="outline"
            type="password"
            mb="6"
            onChange={(event) => setPassword(event.target.value)}
            onKeyPress={handleKeyPress}
          />
          <Button
            isLoading={isLoading}
            colorScheme="teal"
            onClick={login}
          >
            Entrar
            <Icon
              as={MdTrendingFlat}
              mt="1"
              ml="1"
            />
          </Button>
        </Flex>
      </Flex>

      <footer className={styles.footer}>
        Powered by: TDD
      </footer>
    </div>
  )
}

export default Login
