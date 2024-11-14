import React from 'react'
import { useAuth } from '../components/Context/authContext'

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!isAuthenticated) {
    return <div>Please log in to view your profile</div>
  }

  return (
    <div className="profile-container">
      <div className="profile-content">
        <img src={user.picture} alt={user.name} className="profile-image" />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <div className="profile-details">
          <h3>Profile Details</h3>
          <p>Email verified: {user.email_verified ? 'Yes' : 'No'}</p>
          <p>Last updated: {new Date(user.updated_at).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  )
}

export default Profile