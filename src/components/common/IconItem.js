import React from 'react';

export const IconItem = ({ icon, text, style }) => (
    <div className={style}>
        <i className={icon}></i>
        <span className="ml-2">{text}</span>
    </div>
);