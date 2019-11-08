import React from 'react';


const Light = ({ misteries, meditation  }) => {

    switch (misteries) {
        case 1:
            return (
                <div>
                    <h1>The Baptism in the River Jordan (Matthew 3:13–16)</h1>
                    <p className="f3 lh-copy measure mt0-ns">
                        John is baptizing in the Jordan proclaiming a baptism of repentance.
                        “I am the voice of one crying in the desert, make straight the way of the Lord.”
                        “One mightier than I is coming after me.”
                        “I have baptized you with water, He will baptize you with the Holy Spirit.”
                        Seeing Jesus, John exclaims: “Behold the Lamb of God.”
                        Against protests of his unworthiness, John baptizes Jesus in the Jordan.
                        After Jesus’ baptism a voice from Heaven: “This is my beloved Son in whom I am well pleased.”
                        The Spirit descends upon Jesus in the form of a dove.
                        In this heavenly manifestation is instituted the sacrament of baptism.
                        The divine Trinity is manifested: the voice of the Father is heard as the Spirit descends upon the Son.
                    </p>
                </div>
            )
        case 2:
            return (
                <div>
                    <h1> The Wedding Feast at Cana (John 2:1–11)</h1>
                    <p className="f3 lh-copy measure mt0-ns">
                        Jesus, His Mother and disciples were invited to a wedding in Cana.
                        During the wedding feast the wine ran short.
                        Mary turned to Jesus: “They have no wine.”
                        Jesus replied: “What would you have Me do? My hour has not yet come.”
                        Mary said to the waiters: “Do whatever He tells you.”
                        There were six stone water jars, each holding fifteen to twenty gallons.
                        Jesus bids the waiters to fill the jars with water, and then draw some out and take it to the chief steward.
                        The chief steward said to the groom: “Every man serves the good wine first… but you have saved the good wine until now.”
                        At Mary’s request, Jesus worked His first miracle.
                        By His presence, Christian marriage was raised to the dignity of a Sacrament.
                    </p>
                </div>
            )
        case 3:
            return (
                <div>
                    <h1>The Preaching of the coming of the Kingdom of God (Mark 1:14–15)</h1>
                    <p className="f3 lh-copy measure mt0-ns">
                        “Repent, for the kingdom of God is at hand.”
                        “My kingdom is not of this world.”
                        “Unless a man be born again of water and the Spirit, he cannot enter the kingdom of heaven.”
                        “Whoever does not accept the kingdom of God as a little child will not enter into it.”
                        “I have come to call sinners, not the just.”
                        “Love your enemies, pray for those who persecute you.”
                        “Blessed are the poor in spirit, for theirs is the kingdom of heaven.”
                        “Blessed are they who hunger and thirst for justice, for they shall be satisfied.”
                        “Blessed are they who suffer persecution for justice’ sake, for theirs is the kingdom of heaven.”
                        “You are Peter, and upon this rock I will build My church… I will give you the keys of the kingdom of heaven.”
                    </p>
                </div>
            )
        case 4:
            return (
                <div>
                    <h1>The Transfiguration (Matthew 17:1–8)</h1>
                    <p className="f3 lh-copy measure mt0-ns">
                        Jesus took Peter, James and John up a high mountain to pray.
                        Jesus was transfigured before them.
                        “His face became as dazzling as the sun, his clothes as radiant as light.”
                        This was to fortify their faith to withstand the coming tragedy of the Passion.
                        Jesus foresaw the ‘scandal of the cross,’ and prepared them for it by this manifestation of His glory.
                        Moses and Elias (representing the Law and the prophets of the Old Testament) were conversing with Jesus about His Passion.
                        “Do not think I have come to destroy the Law or the Prophets… but to fulfill them.”
                        From a cloud came a voice: “This is my beloved Son, listen to Him.”
                        Jesus admonishes them not to tell the vision to anyone until the Son of Man rises from the dead.
                        We too will behold the transfigured Jesus on the Last Day.
                    </p>
                </div>
            )
        case 5:
            return (
                <div>
                    <h1>The Institution of the Holy Eucharist (Matthew 26).</h1>
                    <p className="f3 lh-copy measure mt0-ns">
                        I have eagerly desired to eat this Passover with you before I suffer.
                        Jesus took bread, blessed it: “Take and eat, this is My Body.”
                        Taking the wine: “This cup is the new covenant in my Blood, shed for you.”
                        At that eucharistic meal, Jesus celebrated the first Mass.
                        At every Mass the sacrifice of Calvary is made present.
                        At the Last Supper Jesus instituted the sacrament of Holy Orders to perpetuate this sacrifice.
                        “Whoever eats my flesh and drinks my blood remains in me and I in him.”
                        The Eucharist is a sacrifice inasmuch as it is offered up, and a sacrament inasmuch as it is received.
                        In the Mass we offer ourselves to God, and God gives himself to us.
                        The Mass will be fruitful in the measure of our surrender to the Father.
                    </p>
                </div>
            )
        default:
            return null
    }
}

export default Light;