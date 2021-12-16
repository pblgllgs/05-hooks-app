import React from 'react'
import PropTypes from 'prop-types'


export const ShowIncrement = React.memo(({increment}) => {

    console.log('Me volvi a generar ;(')

    const handle = () => {
        increment(5)
    }

    return (
        <div>
            <button className='btn btn-primary' onClick={handle}>Incrementar</button>
        </div>
    )
})

ShowIncrement.propTypes = {
    increment : PropTypes.func.isRequired
}
