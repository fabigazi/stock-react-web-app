import React from 'react';

const constructorIcons = {
    'Red Bull': '/images/team-icons/rb.png',
    'Mercedes': '/images/team-icons/mercedes.png',
    'Aston Martin': '/images/team-icons/am.png',
    'Ferrari': '/images/team-icons/ferrari.png',
    'Alpine F1 Team': '/images/team-icons/alpine.png',
    'AlphaTauri': '/images/team-icons/at.png',
    'Alfa Romeo': '/images/team-icons/ar.png',
    'Haas F1 Team': '/images/team-icons/haas.png',
    'McLaren': '/images/team-icons/mclaren.png',
    'Williams': '/images/team-icons/williams.png',
    default: '/images/team-icons/f1.png'
};

const ConstructorIcon = ({ constructorName }) => {
    const icon = constructorIcons[constructorName] || constructorIcons.default;

    return <img src={icon} height="30px" alt={`${constructorName} Icon`} />;
};

export default ConstructorIcon;
