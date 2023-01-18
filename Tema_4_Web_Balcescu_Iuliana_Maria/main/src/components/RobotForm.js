import { useReducer, useRef, useState } from 'react'
import store from '../stores/RobotStore'

function RobotForm () {
    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [mass, setMass] = useState('')
    const refName = useRef(null)
    const refType = useRef(null)
    const refMass = useRef(null)

    const add = (evt) => {
        evt.name = name
        evt.type = type
        evt.mass = mass
        store.addRobot(evt)

        refName.current.value = ''
        refType.current.value = ''
        refMass.current.value = ''
    }

    return (
        <div>
            <h1>Robot form</h1>
            <label htmlFor='name'>name</label>
            <input id='name' type='text' ref={refName} placeholder="name" onChange={(evt) => setName(evt.target.value)}></input>
            <label htmlFor='type'>type</label>
            <input id='type' type='text' ref={refType} placeholder="type" onChange={(evt) => setType(evt.target.value)}></input>
            <label htmlFor='mass'>mass</label>
            <input id='mass' type='text' ref={refMass} placeholder="mass" onChange={(evt) => setMass(evt.target.value)}></input>
            <input type='button' value="Add" onClick={add}></input>
        </div>
    )
}

export default RobotForm