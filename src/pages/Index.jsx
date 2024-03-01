import React from "react";
import { Box, Container, SimpleGrid, Image, Text, Button, Heading, useToast } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const images = [
  { id: 1, title: "Landscape", price: "30.00", src: 'https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MXwxfHNlYXJjaHwxfHxsYW5kc2NhcGV8ZW58MHx8fHwxNzA5MjE3MjY2fDA&ixlib=rb-4.0.3&q=80&w=1080' },
  { id: 2, title: "City Life", price: "45.00", src: 'https://images.unsplash.com/photo-1518242007602-8d2524b53ddd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjaXR5JTIwbGlmZXxlbnwwfHx8fDE3MDkyNjM5NDd8MA&ixlib=rb-4.0.3&q=80&w=1080' },
  { id: 3, title: "Nature", price: "25.00", src: 'https://images.unsplash.com/photo-1683009427500-71296178737f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MXwxfHNlYXJjaHwxfHxuYXR1cmV8ZW58MHx8fHwxNzA5MjYzOTQ3fDA&ixlib=rb-4.0.3&q=80&w=1080' },
  // Add more images as needed
];

const Index = () => {
  const toast = useToast();

  const handlePurchase = (imageTitle) => {
    toast({
      title: "Purchase Successful",
      description: `You have purchased the ${imageTitle} image.`,
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.xl" py={8}>
      <Heading as="h1" mb={6}>
        Image Gallery
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
        {images.map((image) => (
          <Box key={image.id} textAlign="center">
            <Image src={image.src} alt={image.title} borderRadius="md" mb={4} />
            <Text fontWeight="bold">{image.title}</Text>
            <Text mb={4}>${image.price}</Text>
            <Button leftIcon={<FaShoppingCart />} colorScheme="teal" variant="solid" onClick={() => handlePurchase(image.title)}>
              Buy Now
            </Button>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Index;
