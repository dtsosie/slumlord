import defaultLevelImage from './hobo_a.jpg';
import React from 'react';

const LevelObject = () => {
    return (
        <div className='LevelObject'>
            <img src={defaultLevelImage} alt='Default Object Representation' />
        </div>
    )
};

export default LevelObject;