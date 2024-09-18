import React, {useState,useEffect} from 'react'
import DataTable from 'react-data-table-component';
import axios from 'axios'
const TodosListings = () => {
        <h1>Hello </h1>
    const columns = [
        {
            name: 'No.',
            selector: row => row.id,
        },
        {
            name: 'UserId',
            selector: row => row.userId,
        },
        {
            name: 'Title',
            selector: row => row.title,
        },
        {
            name: 'Completed',
            selector: row => row.completed ? "Completed":"Pending",
        },
    ];
    
    const [todos,setTodos] = useState([])
    useEffect(() => {
        fetchData()
    },[])
    const userId = 1;
    const filterTodos = todos.filter((todo) => todo.userId == userId)
    const fetchData = async() => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos")
        setTodos(response.data)
    }
    
  return (
    <div>
        <DataTable
			columns={columns}
			data={todos}
            pagination
            
		/>
        
    </div>
  )
}

export default TodosListings