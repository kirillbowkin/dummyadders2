import { Icon } from '@chakra-ui/react'
import { observer } from 'mobx-react-lite/'
import React from 'react'

import {AiFillBulb, AiOutlineBulb} from 'react-icons/ai'

const Bulb = observer(({isLit}) => {
    return (
        <Icon as={isLit ? AiFillBulb : AiOutlineBulb} w={8} h={8}/>
    )
}) 

export default Bulb
