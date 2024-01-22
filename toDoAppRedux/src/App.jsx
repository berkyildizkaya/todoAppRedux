import { Box, Button, Card, Container, Flex, FormControl, FormLabel, Grid, Heading, Input, Stack, Text } from '@chakra-ui/react'
import { useState } from 'react'
import TodoCard from './components/TodoCard';
import { useDispatch, useSelector } from 'react-redux';
import {todoAdd,todoDelete} from './redux/todo'


function App() {
  const dispatch = useDispatch();
  const [todoInputValue, setTodoInputValue] = useState('');
  const todos = useSelector((state) => state.todos);
  const HandleInputChange = (event) => {
    setTodoInputValue(event.target.value);
  }
  const handleAddTodo = () =>{
    dispatch(todoAdd(todoInputValue))
  }
  // const addToDo = () => {
  //   if (todoInputValue !== "") {
  //     setToDoList([...toDoList, { id: toDoList.length + 1, TodoText: todoInputValue }]);
  //     setTodoInputValue("");
  //   }
  // }
  const handleDelete = (id) => {
    dispatch(todoDelete(id))
    // const updatedToDoList = toDoList.filter((todo) => todo.id !== id); // Elimde db olmadığı için bu şekilde yapıyorum.
    // setToDoList(updatedToDoList); // Yeni listeyi stateye yerleştirdim.
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
            <Button onClick={handleAddTodo}>Add</Button>
          </Box>
        </Flex>
        <Flex direction={"column"} gap={"2"}>
          {todos.map((todo) => (
            <TodoCard key={todo.id} id={todo.id} TodoText={todo.TodoText} onDelete={handleDelete} />
          ))}
        </Flex>
      </Container>
    </>
  )
}

export default App
