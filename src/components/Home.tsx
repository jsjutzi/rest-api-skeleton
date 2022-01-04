import axios from 'axios'
import React, {useState, useEffect} from 'react'

const baseUrl = 'http://localhost:8080'

const Home = () => {
    const [users, updateUsers] = useState(null)
    const [input, updateInput] = useState('')

    useEffect(() => {
        console.log('making a call')
        axios.get(`${baseUrl}/`).then((response) => {
            updateUsers(response.data)
        })
    }, [])

    const handleChange = (event) => {
        updateInput(event.target.value)
    }

    const addUser = () => {
        if (input) {
            console.log('posting with: ', input)
            axios.post(`${baseUrl}/addUser`, {
                name: input
            }).then((response) => {
                updateInput('')
                alert(response.data)
            })
        }
    }

    console.log(users)
    return (
        <>
        <div>
            <input value={input} onChange={(e) => handleChange(e)} />
            <button onClick={addUser}>Add User</button>
        </div>
        </>
    )
}

export default Home