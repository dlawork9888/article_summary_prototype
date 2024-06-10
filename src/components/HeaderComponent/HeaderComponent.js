import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderComponent.css';

const HeaderComponent = () => {
    return (
        <div 
            className="header"
            style={{
                fontSize: 30,
                color:'#FFFFFF',
                fontWeight: 'bold'
            }}
        >
            IT Article Summary
        </div>
    );
};

export default HeaderComponent;
