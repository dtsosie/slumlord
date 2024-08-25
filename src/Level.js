import levelImage from './level.jpg';
import React from 'react';
import LevelObject from './LevelObject';

const Level = () => {
    return (
        <div className='Level'>
            <img src={levelImage} alt='Level Background' />
            <LevelObject imgScale='18%' xPos='250px' yPos='350px' />
        </div>
    )
};

export default Level;