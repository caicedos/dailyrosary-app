import React from 'react';

const Nativity = ({ meditation }) => {
    switch (meditation) {
        case 1:
            return <p>Joseph and Mary go to Bethlehem to comply with the decree of Caesar Augustus.</p>
        case 2:
            return <p>The hour for Mary to give birth is near, but there is no room in the inn.</p>
        case 3:
            return <p>In the stillness of the night, the Savior is born in a cave, Mary remaining a Virgin.</p>
        case 4:
            return <p>She wraps Him in swaddling clothes and lays Him in a manger.</p>
        case 5:
            return <p>In unspeakable joy Mary gathers to her bosom the Flower of her virginity.</p>
        case 6:
            return <p>Jesus enters the world in poverty to teach the lesson of detachment from earthly things.</p>
        case 7:
            return <p>The angel announces to the shepherds: “Today there is born to you in the town of David a Savior, Who is Christ the Lord.”</p>
        case 8:
            return <p>The angelic chorus sing: “Glory to God in the highest, and peace to His people on earth.”</p>
        case 9:
            return <p>The shepherds come to the stable to pay homage to the Infant Jesus.</p>
        case 10:
            return <p>The Magi come to adore the Holy Child and offer Him gifts.</p>
        default: return null
    }
}

export default Nativity;