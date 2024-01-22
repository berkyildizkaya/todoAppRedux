import { Box, Button, Card, CardBody, Checkbox, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { todoDelete, todoComplete } from "../redux/todo";
import { useDispatch } from 'react-redux';

export default function TodoCard({ id, TodoText, isComplete }) {
    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(todoDelete(id));
    };

    const handleToDoComplete = () => {
        dispatch(todoComplete(id));
    }
    return (
        <>
            <Card key={id} >
                <CardBody>
                    <Flex align={"center"} wrap={["wrap", "nowrap"]} gap={"2"}>
                        <Box>
                            <Checkbox mt={"5px"} onChange={handleToDoComplete} isChecked={isComplete} />
                        </Box>
                        <Box >
                            <Text as={isComplete ? 's' : 'b'} wordBreak={"break-word"} >
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
