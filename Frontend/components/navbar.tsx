import React, { ReactNode } from 'react';
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Avatar,
  Circle,
  Image,
} from '@chakra-ui/react';
import {
  FiMenu,
} from 'react-icons/fi';
import { IconType } from 'react-icons';
import { ReactText } from 'react';
import { MdMap, MdHome, MdAssessment, MdCreate, MdMessage } from 'react-icons/md'

interface LinkItemProps {
  name: string
  icon: IconType
  href: string
  notification: boolean
}

const LinkItems: Array<LinkItemProps> = [
  { 
    name: 'Home',
    icon: MdHome,
    href: 'home',
    notification: false,
  },
  { 
    name: 'Trilhas',
    icon: MdMap,
    href: 'paths',
    notification: false,
  },
  { 
    name: 'Pesquisas',
    icon: MdCreate,
    href: 'surveys',
    notification: true,
  },
  { 
    name: 'Dashboards',
    icon: MdAssessment,
    href: 'dashboards',
    notification: false,
  },
  { 
    name: 'Fórum',
    icon: MdMessage,
    href: 'home',
    notification: true,
  },
]

export default function SimpleSidebar({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box flex="1" minH="100vh" bg="#FAF9F4">
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box flex="1" ml={{ base: 0, md: 60 }} p="10">
        {children}
      </Box>
    </Box>
  )
}

interface SidebarProps extends BoxProps {
  onClose: () => void
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex direction="column">
        <Flex h="30" width="50" alignItems="center" m="10" justifyContent="space-between">
          <Image
            src='/logo.png'
            objectFit="cover"
            height="100px"
            width="100px"
            alt="consciê"
          />
          <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
        </Flex>
        {LinkItems.map((link) => (
          <NavItem key={link.name} icon={link.icon} href={link.href}>
            {link.name}
            {link.notification &&  <Circle ml={2} size="12px" bg="tomato" color="white" />}
          </NavItem>
        ))}
      </Flex>
    </Box>
  )
}

interface NavItemProps extends FlexProps {
  icon: IconType
  href: string
  children: ReactText
}

const NavItem = ({ icon, href, children, ...rest }: NavItemProps) => {
  return (
    <Link href={'/' + href} style={{ textDecoration: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'teal',
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  )
}

interface MobileProps extends FlexProps {
  onOpen: () => void
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="10vh"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent="flex-start"
      {...rest}>
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        Logo
      </Text>
    </Flex>
  )
}
