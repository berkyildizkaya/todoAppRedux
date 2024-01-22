import { Box, Button, Container, Flex, Heading, Input} from '@chakra-ui/react'
import { useState } from 'react'
import TodoCard from './components/TodoCard';
import { useDispatch, useSelector } from 'react-redux';
import { todoAdd } from './redux/todo'


function App() {
  const dispatch = useDispatch();
  const [todoInputValue, setTodoInputValue] = useState('');
  const todos = useSelector((state) => state.todos);
  const HandleInputChange = (event) => {
    setTodoInputValue(event.target.value);
  }
  const handleAddTodo = () => {
    if (todoInputValue !== "") {
      dispatch(todoAdd(todoInputValue))
    }
    setTodoInputValue("");
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
            <TodoCard key={todo.id} id={todo.id} TodoText={todo.TodoText} isComplete={todo.isComplete} />
          ))}
        </Flex>
      </Container>
    </>
  )
}

export default App
