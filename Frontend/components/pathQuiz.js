import {
  Button,
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
  Image,
  Flex,
} from '@chakra-ui/react'
import RadioQuestion from '../components/radioQuestion'
import SliderQuestion from '../components/sliderQuestion'

const Quiz = ({ imageSrc, imageAlt }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Image
        src={imageSrc}
        onClick={onOpen}
        objectFit="cover"
        height="100%"
        width="100%"
        alt={imageAlt}
        cursor="pointer"
      />
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="xl"
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <Flex m="5" direction="column">
            <RadioQuestion text='1. Avalie a afirmação: "Entre os jovens, há mais homens com emprego do que mulheres".' />
            <SliderQuestion />
            <RadioQuestion text='3. Avalie a afirmação: Em média, o salário das mulheres é maior do que o dos homens.' />
            <Button
              m={2}
              colorScheme="teal"
              onClick={onClose}
            >
              ENVIAR
            </Button>
          </Flex>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Quiz
