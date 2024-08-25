import defaultLevelImage from './hobo_a.png';
import React from 'react';

class LevelObject extends React.Component {
    state = {enabled: false};

    constructor(props) {
        super(props);
        this.props = props;
        return;
    }

    handleOnMouseOver(e) {
        if(e.type === 'mouseenter') {
            e.target.style.opacity = 1;
        }
        else {
            e.target.style.opacity = this.state.enabled ? 1 : .6;
        }
    }

    render() {
        const style = {
            width: this.props.imgScale,
            left: this.props.xPos,
            top: this.props.yPos
        };
        
        style.opacity = this.state.enabled ? 1 : .6;
        
        return (
            <div className='LevelObject'>
                <img src={defaultLevelImage} alt='Default Object Representation' style={style}
                    onMouseEnter={this.handleOnMouseOver}
                    onMouseLeave={this.handleOnMouseOver.bind(this)} />
            </div>
        )
    }
};

export default LevelObject;