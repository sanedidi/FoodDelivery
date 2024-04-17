import React from 'react'
import Header from '../components/Header/Header'
import UserInfo from '../components/UserInfo/UserInfo'

const Profile = () => {
  return (
    <>
    <Header />
    <section className="profile">
      <div className="container">
        <div className="profile__wrapper">
          <UserInfo />
        </div>
      </div>
    </section>
    </>
  )
}

export default Profile
