import React from 'react';
import Sorrowful from '../Misteries/Sorrowful';
import Glorious from '../Misteries/Glorious';
import Joyful from '../Misteries/Joyful';
import Light from '../Misteries/Light';

const MisteryDay = ({ today, misteries, meditation }) => {
    console.log(meditation)
    switch (today) {
        case 0:
            return <Glorious meditation={meditation} misteries={misteries} />;
        case 1:
            return <Joyful meditation={meditation} misteries={misteries} />;
        case 2:
            return <Sorrowful meditation={meditation} misteries={misteries} />;
        case 3:
            return <Glorious meditation={meditation} misteries={misteries} />;
        case 4:
            return <Light meditation={meditation} misteries={misteries} />;
        case 5:
            return <Sorrowful meditation={meditation} misteries={misteries} />;
        case 6:
            return <Joyful meditation={meditation} misteries={misteries} />;
        default:
            return null
    }
}

export default MisteryDay;