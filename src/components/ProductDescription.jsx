import { Box, Button, Heading, Image, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

function ProductDescription() {
  const navigate = useNavigate();

  return (
    <Box display={'flex'} alignItems={'center'} flexDirection={'column'} justifyContent={'center'} textAlign="center" p={5}>
        <Heading fontSize={'5xl'}>Car Assembly</Heading>
      <Image w={'20%'} src="https://c1.wallpaperflare.com/preview/200/862/475/black-background-audi.jpg" alt="Car" />
      <Text fontSize="xl" w={'40%'} mt={4}>This is a description of the car. It highlights the key features and components of the car.</Text>
      <Button colorScheme="red" size="lg" mt={4} onClick={() => navigate('/parts-selection')}>START</Button>
    </Box>
  );
}

export default ProductDescription;
