import { Box, Button, ButtonGroup, Card, CardBody, Checkbox, Container, Flex, Grid, GridItem, HStack, Stack, Text } from '@chakra-ui/react'
import React from 'react'

export default function TodoCard({ id, TodoText,onDelete,onComplete,isComplete }) {
    const handleDelete = () =>{
        onDelete(id);
    }
    return (
        <>
            <Card key={id}>
                <CardBody>
                    <Flex align={"center"} wrap={["wrap", "nowrap"]} gap={"2"}>
                        <Box>
                            <Checkbox mt={"5px"}  />
                        </Box>
                        <Box>
                            <Text>
                                {TodoText}
                            </Text>
                        </Box>
                        <Box flex={"1"}>
                            <Flex gap={"2"} justify={"flex-end"} >
                                
                                <Button colorScheme='red' onClick={handleDelete} >Delete</Button>
                            </Flex>
                        </Box>
                    </Flex>
                </CardBody>

            </Card>
        </>
    )
}
