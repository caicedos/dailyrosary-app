import React from 'react';

const Eucharist = ({ meditation }) => {
    switch (meditation) {
        case 1:
            return <p>I have eagerly desired to eat this Passover with you before I suffer.</p>
        case 2:
            return <p>Jesus took bread, blessed it: “Take and eat, this is My Body.”</p>
        case 3:
            return <p>Taking the wine: “This cup is the new covenant in my Blood, shed for you.”</p>
        case 4:
            return <p>At that eucharistic meal, Jesus celebrated the first Mass.</p>
        case 5:
            return <p>At every Mass the sacrifice of Calvary is made present.</p>
        case 6:
            return <p>At the Last Supper Jesus instituted the sacrament of Holy Orders to perpetuate this sacrifice.</p>
        case 7:
            return <p>“Whoever eats my flesh and drinks my blood remains in me and I in him.”</p>
        case 8:
            return <p>The Eucharist is a sacrifice inasmuch as it is offered up, and a sacrament inasmuch as it is received.</p>
        case 9:
            return <p>In the Mass we offer ourselves to God, and God gives himself to us.</p>
        case 10:
            return <p>The Mass will be fruitful in the measure of our surrender to the Father.</p>
        default: return null
    }
}

export default Eucharist;