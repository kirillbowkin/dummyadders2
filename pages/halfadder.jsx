import { Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import HalfAdderBoxSvg from '../components/HalfAdder/HalfAdderBoxSvg'
import HalfAdderCircuitSvg from '../components/HalfAdder/HalfAdderCircuitSvg'
import HalfAdderDashboard from '../components/HalfAdder/HalfAdderDashboard'

const HalfAdder = () => {
    const [isCircuit, setIsCircuit] = useState(true)
    const onClickHandler = () => setIsCircuit(!isCircuit);

    return (
        <VStack w='full' alignItems='center' justifyContent='space-evenly' p={4}>
            <VStack>
                <Text fontSize='2xl' mb={4} fontWeight='semibold'>Half Adder</Text>
                {
                    isCircuit ? (<HalfAdderCircuitSvg onClickHandler={onClickHandler}/>) : (<HalfAdderBoxSvg onClickHandler={onClickHandler}/>)
                }
            </VStack>
            <HalfAdderDashboard />
        </VStack>
            
    )
}

export default HalfAdder
