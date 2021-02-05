import React from 'react';
import { NavLink } from 'react-router-dom';

export const LinkItem = ({ url, text, icon }) => (
    <NavLink to={`${url}`}><h5><i className={icon}></i><span className="ml-2">{text}</span></h5></NavLink>
);