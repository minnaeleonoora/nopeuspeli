import React from 'react';
import "./Circles.css";

const Circles = (props) => {

        return (
            <div 
                className={'circle' + (props.active ? ' active': '')}
                onClick={props.click}
                style={{ backgroundColor: props.active ? props.active : props.buttonColor}}
                >

            </div>
        )
    }


export default Circles;