import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Planet = (props) => {
    const [state, setState] = useState()
    const { id } = useParams()

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then(response => setState(response.data))
            .catch(error => console.log('/error'))
    }, [id]);
    return (
        <div>
            {/* <Form /> */}
            {
                (state) ?
                    <div>
                        <h1>{state.name}</h1>
                        <p>
                            <b>Climate:</b>{state.climate}<br />
                            <b>Terrain:</b> {state.terrain} <br />
                            <b>Surface Water:</b> {state.surface_water}<br />
                            <b>Population:</b> {state.population}<br />
                        </p>
                    </div> : <h1>Error</h1>
            }
        </div>
    )
}

export default Planet
