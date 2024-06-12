import { Box, Button, Heading, Image, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

function ProductDescription() {
  const navigate = useNavigate();

  return (
    <Box bg={'black'} display={'flex'} alignItems={'center'} flexDirection={'column'} justifyContent={'center'} textAlign="center" p={5}>
        <Heading fontSize={'5xl'}>Car Assembly</Heading>
      <Image w={'20%'} src="https://c1.wallpaperflare.com/preview/200/862/475/black-background-audi.jpg" alt="Car" />
      <Text fontSize="xl" w={'40%'} mt={4}>A ReactJS web app guides users through car assembly: 1st screen introduces with image & description, 2nd allows part selection, 3rd enables drag-and-drop assembly, and 4th displays the final product for review. Smooth, intuitive experience ensured.</Text>
      <Button colorScheme="red" size="lg" mt={4} onClick={() => navigate('/parts-selection')}>START</Button>
    </Box>
  );
}

export default ProductDescription;
//