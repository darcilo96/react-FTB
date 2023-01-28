import React from 'react'
import {Box,Flex,Spacer} from '@chakra-ui/react'

let menu = ["Home","Guitars", "Amps", "Pedals"];
let pad = 3;

const ItemListContainer = () => {
    return (
        <>
        <Flex>
            <Box p={pad}>
                <li>Home</li>
            </Box>
            <Spacer/>
            <Box p={pad}>
                <li>Guitars</li>
            </Box>
            <Spacer/>
            <Box p={pad}>
                <li>Amps</li>
            </Box>
            <Spacer/>
            <Box p={pad}>
                <li>Pedals</li>
            </Box>
            <Spacer/>
        </Flex>
            {/* <ul className='lista'>{menu.map((element, index) => <li key={index}>{element}</li> )}</ul> */}
            {/* La línea 28 se utilizará en el futuro para tomar el menú desde un array */}
        </>
    )
}

export default ItemListContainer