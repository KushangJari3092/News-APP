import React, { PureComponent } from 'react'
import spin from './spin.gif'

const Spinner = () => {
        return (
            <div className='text-center'><img src={spin} alt="spin" /></div>
        )
    
}

export default Spinner;