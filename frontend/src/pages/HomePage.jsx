import React, { useEffect } from 'react'
import {Container,VStack,Text,SimpleGrid} from '@chakra-ui/react';
import { useproductStore } from '../store/product';
import ProductCard from '../components/ProductCard.jsx';
function HomePage() {
  const {fetchProducts,products}=useproductStore();
  useEffect(()=>{
    fetchProducts();
  },[fetchProducts]);
  //console.log("products",products);
  
  return (
    <Container maxW='container.x1' py={12}>
      <VStack spacing={8}>
        <Text fontSize={"30"}
        fontWeight={"bold"}
        bgGradient={"linear(to-r,cyan.400,blue.500)"}
        bgClip={"text"}
        textAlign={"center"}
>Current Products🚀</Text>

<SimpleGrid 
columns={{
  base:1,
  md:2,
  lg:3
}}
spacing={10}
w={"full"}
>
{products.map((product)=>(
  <ProductCard  product={product}/>
))}

</SimpleGrid>
{products.length===0 && (
  <Text fontSize='x1' textAlign={"center"} fontWeight={'bold'} color='gray.500'>
  No products found 🥲{" "}
  <a href="/create">
  
  <Text as='span' color='blue.500' _hover={{textDecoration:"underline"}}>
    Create a product
  </Text>
  </a>

</Text>
   
)}

   </VStack>
    </Container>
  )
}

export default HomePage
