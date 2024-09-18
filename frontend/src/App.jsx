import { Box, useColorModeValue } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import Create from './pages/Create';

function App() {
  return (
    <>
      <BrowserRouter> {/* Move BrowserRouter here */}
        <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/create" element={<Create />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </>
  );
}

export default App;
