import levelImage from './level.jpg';
import React from 'react';

const Level = () => {
    return (
        <div className='Level'>
            <img src={levelImage} alt='Level Background' />
        </div>
    )
};

export default Level;