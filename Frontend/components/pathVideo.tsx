import {
  AspectRatio,
  Image,
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react'

export interface VideoProps {
  videoUrl: string,
  imageSrc: string,
  imageAlt: string
}

const Video = ({ videoUrl, imageSrc, imageAlt }: VideoProps) => {
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
          <AspectRatio borderRadius="md">
            <iframe
              width="560"
              height="315"
              src={videoUrl}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </AspectRatio>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Video
