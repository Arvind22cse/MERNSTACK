import React from 'react'
import {Container,Flex,Text,HStack,Link, Button, useColorMode} from '@chakra-ui/react';
import {PlusSquareIcon} from "@chakra-ui/icons";
//import { IoSunnyOutline } from "react-icons/io5";
//import { Link } from 'react-router-dom'; 
import { BsMoon } from "react-icons/bs";
import { CiSun } from "react-icons/ci";
import { FiSun } from "react-icons/fi";
function Navbar() {
    const {colorMode,toggleColorMode}=useColorMode();
  return (
    <Container  maxW={"1140px"} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"} flexDir={{base:"column",sm:"row"}}>
        <Text
        fontSize={{base:"22",sm:"28"}}
        fontWeight={"bold"}
        textTransform={"uppercase"}
        textAlign={"center"}
        bgGradient={"linear(to-r,cyan.400,blue.500)"}
        bgClip={"text"}
        >
            {/* <Link to={"/"}>Product store 🛒</Link> */}
            <a href="/">Product store 🛒</a>
        </Text>
        <HStack spacing={2}>
        {/* <Link to={"/create"}> */}
        <a href="/create">
        <Button>
        
            <PlusSquareIcon fontSize={20}/>
            
        </Button>

        </a>
        <Button onClick={toggleColorMode}>
            {colorMode ==="light"?<BsMoon />:<FiSun size="20"/> }
        </Button>
        </HStack>
        </Flex>
    </Container>
  )
}

export default Navbar
