import React from 'react';
import moment from 'moment'


const Profile = ({ signedin, user }) => {
  const { firstname, lastname, email, prayed, joined, level, streak } = user
  if (signedin) {
    return (
      <article className="pa3 pa5-ns" data-name="slab-stat-large">
        <h3 className="f6 ttu tracked">{`name: ${firstname} ${lastname}`}</h3>
        <h3 className="f6 ttu tracked">{`email: ${email}`}</h3>
        <h3 className="f6 ttu tracked">Today's Date: {moment().format('dddd, MMMM Do YYYY, h:mm:ss a')}</h3>
        <div className="cf">
          <dl className="db dib-l w-auto-l lh-title mr6-l">
            <dd className="f6 fw4 ml0">Rosaries Prayed</dd>
            <dd className="f2 f-subheadline-l fw6 ml0">{prayed}</dd>
          </dl>
          <dl className="db dib-l w-auto-l lh-title mr6-l">
            <dd className="f6 fw4 ml0">Current Streak</dd>
            <dd className="f2 f-subheadline-l fw6 ml0">{streak} days</dd>
          </dl>
          <dl className="db dib-l w-auto-l lh-title mr6-l">
            <dd className="f6 fw4 ml0">Level</dd>
            <dd className="f2 f-subheadline-l fw6 ml0">{level}</dd>
          </dl>
          <dl className="db dib-l w-auto-l lh-title mr6-l">
            <dd className="f6 fw4 ml0">Joined</dd>
            <dd className="f2 f-subheadline-l fw6 ml0">{joined}</dd>
          </dl>
          {/* <dl className="db dib-l w-auto-l lh-title mr6-l">
            <dd className="f6 fw4 ml0">Favorite Hour to Pray</dd>
            <dd className="f2 f-subheadline-l fw6 ml0">All of Them</dd>
          </dl>
          <dl className="db dib-l w-auto-l lh-title">
            <dd className="f6 fw4 ml0">Average Time Loggedin</dd>
            <dd className="f2 f-subheadline-l fw6 ml0">1,200</dd>
          </dl> */}
        </div>
      </article>)
  } else {
    return (<div>NOT SIGNEDIN!!!</div>)
  }
}

export default Profile;