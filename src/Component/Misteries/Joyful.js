import React from 'react';

const Joyful = ({ misteries }) => {

    switch (misteries) {
        case 1:
            return (
                <div>
                    <h1>The Annunciation (Luke 1:26–38)</h1>
                    <p className="f3 lh-copy measure mt0-ns">
                        The time for the Incarnation is at hand.
                        Of all women God prepared Mary from her conception to be the Mother of the Incarnate Word.
                        The Angel Gabriel announces: “Hail, full of grace! The Lord is with thee.”
                        Mary wonders at this salutation.
                        The Angel assures her: “Fear not . . . you shall conceive in your womb, and give birth to a Son.”
                        Mary is troubled for she has made a vow of virginity.
                        The Angel answers that she will conceive by the power of the Holy Spirit, and her Son will be called the Son of God.
                        The Incarnation awaits Mary’s consent.
                        Mary answers: “Behold the handmaid of the Lord. Be it done unto me according to your word.”
                        The Word was made flesh and dwelt among us.
                    </p>
                </div>
            )
        case 2:
            return (
                <div>
                    <h1>The Visitation (Luke 1:39–56)</h1>
                    <p className="f3 lh-copy measure mt0-ns">
                        Mary’s cousin Elizabeth conceived a son in her old age… for nothing is impossible with God.
                        Charity prompts Mary to hasten to visit Elizabeth in the hour of her need.
                        The journey to Elizabeth’s home is about eighty miles requiring four or five days.
                        Though long and arduous, the journey is joyous, for Mary bears with her the Incarnate Word.
                        At Mary’s salutation, John the Baptist is sanctified in his mother’s womb.
                        Elizabeth exclaims: “Blessed are you among women, and blessed is the fruit of your womb.”
                        “How have I deserved that the mother of my Lord should come to me?”
                        “Blessed is she who believed that the Lord’s words to her would be fulfilled.”
                        Mary replies: “My soul proclaims the greatness of the Lord, and my spirit finds joy in God my Savior.”
                        Mary serves her cousin in all humility for three months until the birth of John the Baptist.
                    </p>
                </div>
            )
        case 3:
            return (
                <div>
                    <h1>The Nativity (Luke 2:1–21)</h1>
                    <p className="f3 lh-copy measure mt0-ns">
                        Joseph and Mary go to Bethlehem to comply with the decree of Caesar Augustus.
                        The hour for Mary to give birth is near, but there is no room in the inn.
                        In the stillness of the night, the Savior is born in a cave, Mary remaining a Virgin.
                        She wraps Him in swaddling clothes and lays Him in a manger.
                        In unspeakable joy Mary gathers to her bosom the Flower of her virginity.
                        Jesus enters the world in poverty to teach the lesson of detachment from earthly things.
                        The angel announces to the shepherds: “Today there is born to you in the town of David a Savior, Who is Christ the Lord.”
                        The angelic chorus sing: “Glory to God in the highest, and peace to His people on earth.”
                        The shepherds come to the stable to pay homage to the Infant Jesus.
                        The Magi come to adore the Holy Child and offer Him gifts.
                    </p>
                </div>
            )
        case 4:
            return (
                <div>
                    <h1>The Presentation (Luke 2:22–38)</h1>
                    <p className="f3 lh-copy measure mt0-ns">
                        Observing the law of Moses they take Jesus to the temple to present Him to the Lord.
                        According to the Law the firstborn male child of every family should be consecrated to the Lord.
                        Mary offers her Son to the Father, then ransoms Him back at the price paid by the poor.
                        Jesus is not subject to the law of Moses, yet to teach obedience, submits to it.
                        Mary is not subject to the law of purification, yet in humility she submits to it.
                        God had revealed to Simeon that he would not see death until he had seen the Messiah.
                        Recognizing the Child, he prays: “Now you can dismiss your servant in peace. You have fulfilled your word.”
                        “This Child is destined to be the downfall and rise of many in Israel, a sign that will be opposed.”
                        And to Mary Simeon reveals: “And your own soul a sword shall pierce.”
                        After they fulfill all the Law requires they return to Nazareth.
                    </p>
                </div>
            )
        case 5:
            return (
                <div>
                    <h1>The Finding of the Child Jesus in the Temple (Luke 2:41–52)</h1>
                    <p className="f3 lh-copy measure mt0-ns">
                        When Jesus is twelve years old, He goes with His parents to Jerusalem for the feast of the Passover.
                        After the feast of the Passover, Joseph and Mary unknowingly set out for Nazareth without Jesus.
                        At the end of the first day’s journey they discover Jesus is missing.
                        His parents return immediately looking for Him.
                        This loss causes grief and anxiety beyond our understanding to the hearts of Mary and Joseph.
                        On the third day they find Jesus in the Temple among the Doctors who were astonished at His wisdom.
                        Mary: “Son, why have you done this to us? Your father and I have been searching for You in sorrow.”
                        Jesus: “Why did you search for Me? Did you not know that I must be about My Father’s business?”
                        Jesus goes down with them to Nazareth, and is subject to them.
                        Mary keeps all these things in her heart.
                    </p>
                </div>
            )
        default:
            return null
    }
}

export default Joyful;