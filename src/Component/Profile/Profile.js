import React from 'react';


const Profile = ({id, signedin}) => {

    if(signedin){
        return(
        <article className="pa3 pa5-ns" data-name="slab-stat-large">
        <h3 className="f6 ttu tracked">{`member: ${id}`}</h3>
        <h3 className="f6 ttu tracked">Today's Date</h3>
        <div className="cf">
          <dl className="db dib-l w-auto-l lh-title mr6-l">
            <dd className="f6 fw4 ml0">Rosaries Prayed</dd>
            <dd className="f2 f-subheadline-l fw6 ml0">1,024</dd>
          </dl>
          <dl className="db dib-l w-auto-l lh-title mr6-l">
            <dd className="f6 fw4 ml0">Current Streak</dd>
            <dd className="f2 f-subheadline-l fw6 ml0">993</dd>
          </dl>
          <dl className="db dib-l w-auto-l lh-title mr6-l">
            <dd className="f6 fw4 ml0">Member Months</dd>
            <dd className="f2 f-subheadline-l fw6 ml0">10-22</dd>
          </dl>
          <dl className="db dib-l w-auto-l lh-title mr6-l">
            <dd className="f6 fw4 ml0">Level</dd>
            <dd className="f2 f-subheadline-l fw6 ml0">4</dd>
          </dl>
          <dl className="db dib-l w-auto-l lh-title mr6-l">
            <dd className="f6 fw4 ml0">Favorite Hour to Pray</dd>
            <dd className="f2 f-subheadline-l fw6 ml0">All of Them</dd>
          </dl>
          <dl className="db dib-l w-auto-l lh-title">
            <dd className="f6 fw4 ml0">Average Time Loggedin</dd>
            <dd className="f2 f-subheadline-l fw6 ml0">1,200</dd>
          </dl>
        </div>
      </article>)
    } else {
        return (<div>NOT SIGNEDIN!!!</div>)
    }
}

export default Profile;