import React, { useState } from 'react';
import { Box, Input,useColorModeValue, Image, Heading, Text, HStack ,useToast, Modal,ModalOverlay,ModalCloseButton,ModalHeader,ModalBody, ModalContent,VStack, useDisclosure, Button,ModalFooter} from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';
import { DeleteIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';
import { useproductStore } from '../store/product';

function ProductCard({ product }) {
  const [updatedProduct,setUpdatedProduct]=useState(product);
  const textColor = useColorModeValue("gray.600", "gray.200");
  const bg = useColorModeValue("white", "grey.800");
  const{isOpen,onOpen,onClose}=useDisclosure();
  const {deleteProducts,updateProduct}=useproductStore()
const toast=useToast()
  const handleDeleteProduct=async(pid)=>{
 const{success,message}=await deleteProducts(pid);

 if(!success){
    toast({
        title:"Error",
        description:message,
        status:"error",
        isClosable:true,
    })
}
else{
    toast({
        title:"Success",
        description:message,
        status:"success",
        isClosable:true,
    });
}
 };
const handleUpdatedProduct=async(pid,updatedProduct)=>{
const{success,message}=await updateProduct(pid,updatedProduct);
onClose();
if(!success){
  toast({
      title:"Error",
      description:"Unsuccess",
      status:"error",
      isClosable:true,
  })
}
else{
  toast({
      title:"Success",
      description:"Product updated successfully",
      status:"success",
      isClosable:true,
  });
};
}
  return (
    
    
    <Box shadow='lg' rounded='lg' overflow='hidden' transition='all 0.3s' _hover={{ transform: "translateY(-5px)", shadow: "xl" }} bg={bg}>
      <Image src={product.image} alt={product.name} h={48} w='full' objectFit='cover' />
      <Box p={4}>
       
        <Heading as="h3" size='md' mb={2}>
          {product.name}
        </Heading>
        <Text fontWeight='bold' fontSize='xl' color={textColor} mb={4}>
        ₹{product.price}
        </Text>
        <Box display='flex' justifyContent='space-between'>
        <HStack  spacing={2}>
          <IconButton icon={<EditIcon />} onClick={onOpen} colorScheme='blue' />
          <IconButton icon={<DeleteIcon />} onClick={()=>handleDeleteProduct(product._id)} colorScheme='red' />
          </HStack>
        </Box>

      </Box>
       <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay/>
        <ModalContent>
          <ModalHeader>Update Product</ModalHeader>
          <ModalCloseButton/>
          <ModalBody>
            <VStack spacing={4}>
              <Input placeholder='product Name' name='name' value={updatedProduct.name} onChange={(e)=>setUpdatedProduct({...updatedProduct,name:e.target.value})}/>
              <Input placeholder='Price' name='price' type='number' value={updatedProduct.price} onChange={(e)=>setUpdatedProduct({...updatedProduct,price:e.target.value})}/>
              <Input placeholder='Image URL' name='image' value={updatedProduct.image} onChange={(e)=>setUpdatedProduct({...updatedProduct,image:e.target.value})}/>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={()=>handleUpdatedProduct(product._id,updatedProduct)}>Update</Button>
         <Button variant='ghost' onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>

      </Modal> 
    </Box>
  );
}

export default ProductCard;