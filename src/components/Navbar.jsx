/* eslint-disable react/prop-types */
// import React from 'react';
import { Box, Flex, Avatar, HStack, Link, IconButton, Button, Menu, MenuButton, useDisclosure, Stack, Text } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

const Links = [
  { name: 'Product Description', path: '/' },
  { name: 'Parts Selection', path: '/parts-selection' },
  { name: 'Assembly', path: '/assembly' },
  { name: 'Final Product', path: '/final-product' },
];

const NavLink = ({ children, to }) => (
  <Link
    as={RouterLink}
    to={to}
    px={2}
    py={1}
    color={'red'}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: 'gray.700',
    }}
    href={'#'}
  >
    {children}
  </Link>
);

export default function Navbar() {
    const navigate = useNavigate()
  const { isOpen, onOpen, onClose } = useDisclosure();
    function handleClick(){
        navigate('/');
    }
  return (
    <Box bg={'gray.900'} px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
          ml={-2}
        />
        <HStack spacing={8} alignItems={'center'}>
          <Box cursor={'pointer'} onClick={handleClick} color={'Red'}>
            <Text fontWeight="bold" fontSize={25} mt={4} color={'Red'}>Red/</Text>
            <Text fontWeight="bold" fontSize={25} mb={5} color={'Red'}>Nerds</Text>
          </Box>
          <HStack
            as={'nav'}
            spacing={4}
            display={{ base: 'none', md: 'flex' }}
          >
            {Links.map((link) => (
              <NavLink key={link.path} to={link.path}>{link.name}</NavLink>
            ))}
          </HStack>
        </HStack>
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton
              me={4}
              as={Button}
              rounded={'full'}
              variant={'link'}
              cursor={'pointer'}
              minW={0}
            >
              <Avatar
                size={'sm'}
                src={
                  'https://www.pngkey.com/png/full/72-729716_user-avatar-png-graphic-free-download-icon.png'
                }
              />
            </MenuButton>
          </Menu>
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            {Links.map((link) => (
              <NavLink key={link.path} to={link.path}>{link.name}</NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}
