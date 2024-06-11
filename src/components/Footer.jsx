// import React from 'react';
import { Box, Grid, Text, Link, Flex } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box bg="black" color="white" py="10">
      <Box maxW="6xl" mx="auto" px={{ base: 4, md: 8 }}>
        <Grid
          templateColumns={{ base: '1fr', md: 'repeat(4, 1fr)' }}
          gap="10"
        >
          <Box textAlign="left">
            <Text fontWeight="500" fontSize="20px" mb="4">Product</Text>
            <Link href="#">Overview</Link>
            <Flex alignItems="center" mt="2">
              <Link href="#">Features</Link>
              <Box bg="#48BB78" color="white" px="2" ml="2">New</Box>
            </Flex>
            <Link href="#">Tutorials</Link>
            <Link href="#">Pricing</Link>
            <Link href="#">Releases</Link>
          </Box>
          <Box textAlign="left">
            <Text fontWeight="500" fontSize="20px" mb="4">Company</Text>
            <Link href="#">About Us</Link>
            <Link href="#">Press</Link>
            <Link href="#">Careers</Link>
            <Link href="#">Contact Us</Link>
            <Link href="#">Partners</Link>
          </Box>
          <Box textAlign="left">
            <Text fontWeight="500" fontSize="20px" mb="4">Legal</Text>
            <Link href="#">Cookies Policy</Link>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
            <Link href="#">Law Enforcement</Link>
            <Link href="#">Status</Link>
          </Box>
          <Box textAlign="left">
            <Text fontWeight="500" fontSize="20px" mb="4">Follow Us</Text>
            <Link href="#">Facebook</Link>
            <Link href="#">Twitter</Link>
            <Link href="#">Dribbble</Link>
            <Link href="#">Instagram</Link>
            <Link href="#">LinkedIn</Link>
          </Box>
        </Grid>
      </Box>
      <Box textAlign="center" py="6">
        <Flex justifyContent="center">
          <svg
            height="32"
            viewBox="0 0 120 28"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
          >
            {/* SVG path data */}
          </svg>
        </Flex>
        <Text color={'red'} pt="4" fontSize="14px">
          © 2024 Red/Nerds. All rights reserved
        </Text>
      </Box>
    </Box>
  );
}

export default Footer;
