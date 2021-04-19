import React from 'react'
import{Container, Text, Author, Date} from "./Card.styles"
export default function Card({post}) {
    return (
        <>
        <Container>
            <Text>{post.text}</Text>
            <Author>{post.name}</Author>
        </Container>
        <Date>Posted: {post.created_at}</Date>
        </>
    )
}
