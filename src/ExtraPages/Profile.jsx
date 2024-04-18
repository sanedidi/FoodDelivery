import React from 'react'
import Header from '../components/Header/Header'
import UserInfo from '../components/UserInfo/UserInfo'
import Footer from '../components/Footer/Footer'

const Profile = () => {
  return (
    <>
    <Header />
    <section className="profile">
      <div className="container">
          <UserInfo />
      </div>
    </section>
    <Footer />
    </>
  )
}

export default Profile
