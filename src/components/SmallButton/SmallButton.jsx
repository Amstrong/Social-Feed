import React from 'react'
import {Btn, Text} from "./SmallButton.styles"
export default function SmallButton({handleClick,text}) {
        return (
            <Btn primary onCLick={handleClick}>
                <Text>{text}</Text>
            </Btn>
        )
    }
    

