import React from 'react'
import {Btn, Text} from "./BigButton.styles"
export default function BigButton({handleClick}) {
        return (
            <Btn primary onCLick={handleClick}>
                <Text>START QUIZ</Text>
            </Btn>
        )
    }
    

