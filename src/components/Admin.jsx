import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import Header from './Header'
import axios from 'axios'

const initalValue = {
    title: '',
    img: '',
    content: '',
}

function Admin() {
    const [values, setValues] = useState(initalValue)
    const history = useHistory()

    function onChange(e) {
        const {name, value} = e.target
        setValues({ ...values, [name]: value})
    }

    function onSubmit(e){
        e.preventDefault()

        axios.post('http://localhost:3001/posts', values)
            .then((response)=>{
                history.push('/')
            })
    }

    return (
        <div>
            <Header />
            <h1>Admin</h1>
            <div className="form" >
                <form onSubmit={onSubmit}>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" name="title" onChange={onChange}/>
                    <label htmlFor="img">Image - URL</label>
                    <input type="text" id="img" name="img" onChange={onChange}/>
                    <label htmlFor="content">Content</label>
                    <input type="textarea" className="message" cols="10" rows="50" id="content" name="content" onChange={onChange}/>
                    <input type="submit" value="Send" className="submit-button"/>

                </form>
            </div>
        </div>
    )
}

export default Admin
