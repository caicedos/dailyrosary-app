import React from 'react';
import Sorrowful from '../Misteries/Sorrowful';
import Glorious from '../Misteries/Glorious';
import Joyful from '../Misteries/Joyful';
import Light from '../Misteries/Light';

const MisteryDay = ({today, misteries}) => {
    
    switch (today) {
        case 0:
            return <Glorious misteries={misteries}/>;
        case 1:
            return <Joyful misteries={misteries}/>;
        case 2:
            return <Sorrowful misteries={misteries}/>;
        case 3:
            return <Glorious misteries={misteries}/>;
        case 4:
            return <Light misteries={misteries}/>;
        case 5:
            return <Sorrowful misteries={misteries}/>;
        case 6:
            return <Joyful misteries={misteries}/>;
        default: 
            return null
      }  
}

export default MisteryDay;