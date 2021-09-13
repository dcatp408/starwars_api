import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'


const Form = ({setState, id}) => {

    // const [category, setCategory] = useState()
    // const [id, setId] = useState()

    const history = useHistory();

    const [select, setSelect] = useState({
        type:"",
        id: 0
    })

    const submitHandler= (e) => {
        e.preventDefault()
        let a = e.target[0].value
        let b = e.target[1].value
        history.push(`/${a}/${b}`)
    }

    const typeHandler = (e) =>{
        setSelect({... select, type:e.target.value})
    }

    return(
        <fieldset>
            <legend>Form.jsx</legend>
            <form onSubmit={submitHandler}>
                <p>
                    Category:
                    <select name="type" onChange={typeHandler}>
                        <option value="">Select category</option>
                        <option value="people">people</option>
                        <option value="planet">planet</option>

                    ID:
                    
                    </select>
                    <input type="number" name="" id="" onChange={(e) => setSelect({...select, id:e.target.value})}/>
                    <input type="submit" value="Form" placeholder={id}/>
                </p>
            </form>
        </fieldset>
    )
}

export default Form