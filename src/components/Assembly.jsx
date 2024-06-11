/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Box, Flex, Button, useColorMode } from '@chakra-ui/react';
import { useNavigate, useLocation } from 'react-router-dom';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useState } from 'react';
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

const ItemType = {
  PART: 'part',
};

const DraggablePart = ({ part }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemType.PART,
    item: { part },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <Box ref={drag} opacity={isDragging ? 0.5 : 1} p={2} border="1px solid gray" m={1}>
      <img src={part.image} alt={part.name} width="150" />
      <Box>{part.name}</Box>
    </Box>
  );
};

const DroppableArea = ({ id, droppedParts, children }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemType.PART,
    drop: (item) => droppedParts(id, item.part),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <Box
      ref={drop}
      width="48%"
      height="200px"
      border="2px dashed gray"
      bg={isOver ? 'gray.700' : 'gray.900'}
      position="relative"
      display="flex"
      alignItems="center"
      justifyContent="center"
      m={1}
    >
      {isOver && (
        <Box
          textAlign="center"
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          color="white"
        >
          Drop here
        </Box>
      )}
      {children}
    </Box>
  );
};

function Assembly() {
  const navigate = useNavigate();
  const location = useLocation();
  const [assembledParts, setAssembledParts] = useState({ 1: null, 2: null, 3: null, 4: null });
  const { colorMode } = useColorMode();

  const selectedParts = location.state?.selectedParts || [];

  const handleDrop = (zoneId, part) => {
    setAssembledParts((prev) => ({ ...prev, [zoneId]: part }));
  };

  const filteredParts = parts.filter(
    (part) => selectedParts.includes(part.id) && !Object.values(assembledParts).includes(part)
  );

  return (
    <DndProvider backend={HTML5Backend}>
      <Box p={5} bg="black">
        <Flex>
          <Box width="30%" mr="10px">
            {filteredParts.map((part) => (
              <DraggablePart key={part.id} part={part} />
            ))}
          </Box>
          <Box width="70%">
            <Flex wrap="wrap" justify="space-between">
              <DroppableArea id={1} droppedParts={handleDrop}>
                {assembledParts[1] && (
                  <Box p={2} border="1px solid gray" m={1}>
                    <img src={assembledParts[1].image} alt={assembledParts[1].name} width="100px" />
                    <Box>{assembledParts[1].name}</Box>
                  </Box>
                )}
              </DroppableArea>
              <DroppableArea id={2} droppedParts={handleDrop}>
                {assembledParts[2] && (
                  <Box p={2} border="1px solid gray" m={1}>
                    <img src={assembledParts[2].image} alt={assembledParts[2].name} width="100px" />
                    <Box>{assembledParts[2].name}</Box>
                  </Box>
                )}
              </DroppableArea>
              <DroppableArea id={3} droppedParts={handleDrop}>
                {assembledParts[3] && (
                  <Box p={2} border="1px solid gray" m={1}>
                    <img src={assembledParts[3].image} alt={assembledParts[3].name} width="100px" />
                    <Box>{assembledParts[3].name}</Box>
                  </Box>
                )}
              </DroppableArea>
              <DroppableArea id={4} droppedParts={handleDrop}>
                {assembledParts[4] && (
                  <Box p={2} border="1px solid gray" m={1}>
                    <img src={assembledParts[4].image} alt={assembledParts[4].name} width="100px" />
                    <Box>{assembledParts[4].name}</Box>
                  </Box>
                )}
              </DroppableArea>
            </Flex>
          </Box>
        </Flex>
        <Button
          colorScheme="red"
          size="lg"
          mt={4}
          onClick={() =>
            navigate('/final-product', { state: { assembledParts: Object.values(assembledParts).filter(Boolean) } })
          }
        >
          Finish
        </Button>
      </Box>
    </DndProvider>
  );
}

export default Assembly;
//