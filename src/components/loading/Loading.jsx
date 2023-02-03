import React from 'react'

import './loading.scss'

const Loading = () => {
    return (
        <div className='spinner'>
            <div className='spinner__ring'>
                <div />
                <div />
                <div />
                <div />
            </div>
        </div>
    )
}

export default Loading
