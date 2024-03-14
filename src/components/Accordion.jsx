import React, { useState } from 'react'
import data from '../data.js'
import "./Accordion.css"

const Accordion = () => {
    const [selected, setSelected] = useState(null)
    const [emSlection, setEmSlection] = useState(false)
    const [multiple, setMultiple] = useState([])

    const handlesingleselection = (getcurrentid) => {
        setSelected(getcurrentid === selected ? null : getcurrentid)
    }

    const handlemselection = (getcurrentid) => {
        let cypmutpiles = [...multiple]
        const findindexcid = cypmutpiles.indexOf(getcurrentid)

        console.log(findindexcid)

        if (findindexcid === -1) cypmutpiles.push(getcurrentid)
        else cypmutpiles.splice(findindexcid, 1)

        setMultiple(cypmutpiles)
    }

    console.log(selected, multiple)
    return (
        <>
            <div className="wrapper">

                <button onClick={() => setEmSlection(!emSlection)}>Enable Multi selection </button>
                <div className="according">
                    {
                        data && data.length > 0 ? (
                            data.map(dataItem => (
                                <div className='item'>

                                    <div onClick={
                                        emSlection
                                            ? () => handlemselection(dataItem.id)
                                            :
                                            () => handlesingleselection(dataItem.id)} className='title'>

                                        <h3>{dataItem.question}</h3>
                                        <span>+</span>

                                    </div>

                                    {
                                        emSlection ?
                                            multiple.indexOf(dataItem.id) !== -1 &&
                                            (<div className='content'>{dataItem.answer}</div>) :
                                            selected === dataItem.id && (<div className='content'>{dataItem.answer}</div>)
                                    }


                                    {/* {
                                        selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ?
                                            (<div className='content'>{dataItem.answer}</div>)
                                            : null

                                    } */}

                                </div>

                            ))
                        ) : (
                            <div>no data present</div>

                        )}
                </div>
            </div>
        </>
    )
}

export default Accordion
