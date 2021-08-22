import { Box, Flex, Heading, Square, Text } from "@chakra-ui/react";
import { MdCreate } from "react-icons/md"

import Quiz from "./pathQuiz";

export interface PathVideoLineProps {
  imageSrc: string
  imageAlt: string
  title: string
  description: string
}

const PathVideo = ({
  imageSrc,
  imageAlt,
  title,
  description,

}: PathVideoLineProps) => {
  const height = "25vh";

  return (
    <Box
      boxShadow="lg"
      mt={5}
      borderRadius="xl"
      overflow="hidden"
      height={height}
      width="800px"
      bg="white"
    >
      <Flex>
        <Square height={height} size="30%" position="relative">
          <Quiz
            imageSrc={imageSrc}
            imageAlt={imageAlt}
          />
          <Flex
            position="absolute"
            width="100%"
            height="100%"
            alignItems="center"
            justify="center"
            bgColor="whiteAlpha.600"
            pointerEvents="none"
          >
            <MdCreate size={72} />
          </Flex>

        </Square>
        <Box p="15" height={height} flex="1">
          <Heading size="md">{title}</Heading>
          <Box height="9vh">
            <Text fontSize="md" mt="1">
              {description}
            </Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default PathVideo;
