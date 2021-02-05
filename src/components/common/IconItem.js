import React from 'react';

export const IconItem = ({ icon, text, classValue }) => (
    <div className={classValue}>
        <i className={icon}></i>
        <span className="ml-2">{text}</span>
    </div>
);