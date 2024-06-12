import { Box, Image, Button, Grid, Heading, Flex, useToast } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import part1 from '../assets/image_part_001.jpg';
import part2 from '../assets/image_part_002.jpg';
import part3 from '../assets/image_part_003.jpg';
import part4 from '../assets/image_part_004.jpg';

const parts = [
  { id: 1, name: 'part1', image: part1 },
  { id: 2, name: 'part2', image: part2 },
  { id: 3, name: 'part3', image: part3 },
  { id: 4, name: 'part4', image: part4 },
];

function PartsSelection() {
  const navigate = useNavigate();
  const toast = useToast();
  const [selectedParts, setSelectedParts] = useState([]);

  useEffect(() => {
    toast({
      title: "Please select at least one item to proceed.",
      status: "warning",
      duration: 3000,
      isClosable: true,
      position: "top",
      variant: "solid",
      containerStyle: {
        backgroundColor: 'gray.800',
        color: 'white',
      },
    });
  }, [toast]);

  const toggleSelectPart = (id) => {
    setSelectedParts((prev) =>
      prev.includes(id) ? prev.filter((partId) => partId !== id) : [...prev, id]
    );
  };

  const handleNextClick = () => {
    if (selectedParts.length === 0) {
      toast({
        title: "Please select at least one item to proceed.",
        status: "warning",
        duration: 3000,
        isClosable: true,
        position: "top",
        variant: "solid",
        containerStyle: {
          backgroundColor: 'gray.800',
          color: 'white',
        },
      });
    } else {
      navigate('/assembly', { state: { selectedParts } });
    }
  };

  return (
    <Box
      minH={'100vh'}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      p={5}
      textAlign="center"
      bg="black"
      color="white"
    >
      <Heading mb={5}>Select Parts</Heading>
      <Grid
        templateColumns="repeat(auto-fit, minmax(150px, 1fr))"
        gap={4}
        justifyContent="center"
        alignItems="center"
        width="100%"
      >
        {parts.map((part) => (
          <Box key={part.id} p={2} textAlign="center">
            <Flex direction="column" alignItems="center">
              <Image src={part.image} alt={part.name} boxSize="100px" borderRadius="md" />
              <Box mt={2} fontSize="lg" fontWeight={'bold'}>
                {part.name}
              </Box>
              <Button
                mt={2}
                colorScheme={selectedParts.includes(part.id) ? 'red' : 'red'}
                onClick={() => toggleSelectPart(part.id)}
              >
                {selectedParts.includes(part.id) ? 'Deselect' : 'Select'}
              </Button>
            </Flex>
          </Box>
        ))}
      </Grid>
      <Button
        colorScheme={selectedParts.length>0?"red":""}
        size="lg"
        mt={8}
        onClick={handleNextClick}
      >
        Next
      </Button>
    </Box>
  );
}

export default PartsSelection;
