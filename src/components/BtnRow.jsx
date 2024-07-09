import React from 'react'

const BtnRow = ({ number }) => {
    return (
        <>
            <button className='actions__number'>
                {number}
            </button>
        </>
    )
}

export default BtnRow