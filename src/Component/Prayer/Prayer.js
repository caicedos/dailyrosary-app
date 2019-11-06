import React from 'react';

const Prayer = ({ prayer1, prayer2 }) => {

    if (prayer1 === 'glorybe' && prayer2 ==='ourfather') {
        return(
            <div>
                <div>
                    <h1>Glory Be</h1>
                    <p className="f3 lh-copy measure mt0-ns">
                    Glory be to the Father, to the Son, and to the Holy Spirit, as it was, is now, and ever shall be, world without end. Amen.
                </p>
                </div>
                <div>
                    <h1>Our Father</h1>
                    <p className="f3 lh-copy measure mt0-ns">
                        Our Father, Who art in heaven,
                        Hallowed be Thy Name.
                        Thy Kingdom come.
                        Thy Will be done,
                        on earth as it is in Heaven.
    
                        Give us this day our daily bread.
                        And forgive us our trespasses,
                        as we forgive those who trespass against us.
                        And lead us not into temptation,
                        but deliver us from evil. Amen.
                </p>
                </div>
            </div>
        )
    }
       else if (prayer1 === 'hailmary'){
        return (
                <div>
                    <h1>Hail Mary</h1>
                    <p className="f3 lh-copy measure mt0-ns">
                    Hail Mary, full of grace. The Lord is with thee. Blessed art thou among women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.
                </p>
                </div>
            )
        } else if (prayer1 === 'apostlescreed') {
            return(
                <div>
                    <h1>Apostle's Creed</h1>
                    <p className="f3 lh-copy measure mt0-ns">
                    I believe in God, the Father Almighty, Creator of Heaven and earth; and in Jesus Christ, His only Son, Our Lord, Who was conceived by the Holy Ghost, born of the Virgin Mary, suffered under Pontius Pilate, was crucified; died, and was buried. He descended into Hell; the third day He arose again from the dead; He ascended into Heaven, sitteth at the right hand of God, the Father Almighty; from thence He shall come to judge the living and the dead. I believe in the Holy Spirit, the holy Catholic Church, the communion of saints, the forgiveness of sins, the resurrection of the body, and life everlasting. Amen.
                </p>
                </div>
            )
    }   else if (prayer1 === 'ourfather') {
        return (
            <div>
                <h1>Our Father</h1>
                <p className="f3 lh-copy measure mt0-ns">
                    Our Father, Who art in heaven,
                    Hallowed be Thy Name.
                    Thy Kingdom come.
                    Thy Will be done,
                    on earth as it is in Heaven.

                    Give us this day our daily bread.
                    And forgive us our trespasses,
                    as we forgive those who trespass against us.
                    And lead us not into temptation,
                    but deliver us from evil. Amen.
            </p>
            </div>
        )
    }  else {
        return null
    }
}

export default Prayer;