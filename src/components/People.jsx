import React, { useEffect, useState } from 'react'
import { useParams} from 'react-router-dom'
import axios from 'axios'


const People = (props) => {
    // const history = useHistory()

    const [state, setState] = useState({})
    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(res => setState(res.data))
            // .catch(err => history.push('/error'))
    }, [id])
    return (
        <fieldset>
            <legend>People.jsx</legend>
            {/* <Form /> */}
            <div>
                {
                    (state) ?
                        <div>
                            <h1>{state.name}</h1>
                            <h3>Height: {state.height}</h3>
                            <h3>Mass: {state.mass}</h3>
                            <h3>Hair Color: {state.hair_color}</h3>
                            <h3>Skin Color: {state.skin_color}</h3>
                        </div> : <h1>Error</h1>
                }
            </div>
        </fieldset>
    )
}


export default People