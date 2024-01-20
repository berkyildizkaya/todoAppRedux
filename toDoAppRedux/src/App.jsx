import { Box, Button, Card, Container, Flex, FormControl, FormLabel, Grid, Heading, Input, Stack, Text } from '@chakra-ui/react'
import { useState } from 'react'
import TodoCard from './components/TodoCard';


function App() {

  const [todoInputValue, setTodoInputValue] = useState('');
  const [toDoList, setToDoList] = useState([]);
  const HandleInputChange = (event) => {
    setTodoInputValue(event.target.value);
  }
  const addToDo = () => {
    if (todoInputValue !== "") {
      setToDoList([...toDoList, { id: toDoList.length + 1, TodoText: todoInputValue }]);
      setTodoInputValue("");
    }
  }
  const handleDelete = (id) => {
    const updatedToDoList = toDoList.filter((todo) => todo.id !== id); // Elimde db olmadığı için bu şekilde yapıyorum.
    setToDoList(updatedToDoList); // Yeni listeyi stateye yerleştirdim.
  }
  return (
    <>
      <Container maxW={"container.xl"} h={"100vh"} centerContent>
        <Flex mt={"10"} mb={"10"} >
          <Heading>To-Do List App</Heading>
        </Flex>
        <Flex direction={"row"} gap={"2"} p={"10"} mb={"5"} borderWidth='1px' borderRadius='lg'>
          <Box>
            <Input size={"md"} type='text' onChange={HandleInputChange} value={todoInputValue} />
          </Box>
          <Box>
            <Button onClick={addToDo}>Add</Button>
          </Box>
        </Flex>
        <Flex direction={"column"} gap={"2"}>
          {toDoList.map((todo) => (
            <TodoCard key={todo.id} id={todo.id} TodoText={todo.TodoText} onDelete={handleDelete} />
          ))}
        </Flex>
      </Container>
    </>
  )
}

export default App
