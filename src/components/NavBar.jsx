import CartWidget from "./CartWidget"
import ItemListContainer from "./ItemListContainer"
import { Box, Container,Flex, Spacer, Heading} from '@chakra-ui/react'

const NavBar = () => {
    return (
        <>
            <Container maxW="100rem" bg="#EEE" color= "FFF">
                <Flex>
                    <Box>
                        <Heading>FRETBOARD.COM</Heading>
                    </Box>
                    <Spacer/>
                    <Box opacity="0.5">
                        <ItemListContainer/>
                    </Box>
                    <Spacer/>
                    <Box>
                        <CartWidget/>
                    </Box>
                </Flex>
            </Container>
        </>
        
    )
}

export default NavBar