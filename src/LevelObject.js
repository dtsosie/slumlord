import defaultLevelImage from './hobo_a.png';
import React from 'react';

class LevelObject extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        return;
    }

    render() {
        return (
            <div className='LevelObject'>
                <img src={defaultLevelImage} alt='Default Object Representation' 
                style={{ width: this.props.imgScale, left: this.props.xPos, top: this.props.yPos }}/>
            </div>
        )
    }
};

export default LevelObject;