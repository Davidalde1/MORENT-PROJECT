import React, { useState, useEffect } from 'react'
import { useAuth } from '../components/Context/authContext'

const Profile = () => {
  const { user, loading, updateProfileImage } = useAuth()
  const [isEditing, setIsEditing] = useState(false)
  const [userData, setUserData] = useState(null)
  const [uploadError, setUploadError] = useState(null)

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        try {
          const response = await fetch(`https://morentb.vercel.app/api/users/${user.id}`, {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${user.token}`,
              'Accept': 'application/json'
            }
          })

          if (!response.ok) {
            throw new Error('Failed to fetch user data')
          }

          const contentType = response.headers.get("content-type")
          if (!contentType || !contentType.includes("application/json")) {
            throw new Error("Server didn't return JSON")
          }

          const data = await response.json()
          setUserData(data)
        } catch (error) {
          console.error('Error fetching user data:', error)
        }
      }
    }

    fetchUserData()
  }, [user])

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Please login to view your profile</p>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  const handleImageUpload = async (e) => {
    const file = e.target.files[0]
    if (file) {
      setUploadError(null)
      if (file.size > 5 * 1024 * 1024) {
        setUploadError('File size should be less than 5MB')
        return
      }

      const allowedTypes = ['image/jpeg', 'image/png', 'image/gif']
      if (!allowedTypes.includes(file.type)) {
        setUploadError('Please upload a valid image file (JPEG, PNG, or GIF)')
        return
      }

      try {
        await updateProfileImage(file)
        
        const response = await fetch(`https://morentb.vercel.app/api/users/${user.id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${user.token}`,
            'Accept': 'application/json'
          }
        })

        if (!response.ok) {
          throw new Error('Failed to fetch updated user data')
        }

        const contentType = response.headers.get("content-type")
        if (!contentType || !contentType.includes("application/json")) {
          throw new Error("Server didn't return JSON")
        }

        const data = await response.json()
        setUserData(data)
      } catch (error) {
        console.error('Error updating profile image:', error)
        setUploadError(error.message || 'Failed to update profile image')
      }
    }
  }

  return (
    <div className="profile-container min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="profile-content max-w-3xl mx-auto bg-white rounded-lg shadow-xl p-8">
        <div className="text-center">
          <div className="relative inline-block">
            <img
              src={userData?.picture || user.picture || '/default-avatar.png'}
              alt={userData?.name || user.name || 'Profile Picture'}
              className="profile-image w-32 h-32 rounded-full object-cover border-4 border-blue-500 hover:opacity-80 transition-opacity"
              onError={(e) => {
                e.target.src = '/default-avatar.png'
              }}
            />
            <label className="absolute bottom-0 right-0 bg-blue-500 rounded-full p-2 cursor-pointer hover:bg-blue-600 transition-colors">
              <input
                type="file"
                className="hidden"
                accept="image/jpeg,image/png,image/gif"
                onChange={handleImageUpload}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
            </label>
          </div>
          {uploadError && (
            <p className="mt-2 text-red-600 text-sm">{uploadError}</p>
          )}
          <h2 className="mt-4 text-3xl font-bold text-gray-800">{userData?.name || user.name || 'User'}</h2>
          <p className="text-gray-600">{userData?.email || user.email}</p>
        </div>
        
        <div className="profile-details mt-8 border-t pt-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Profile Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-600">Email verified</p>
              <p className="font-medium">
                {(userData?.email_verified || user.email_verified) ? (
                  <span className="text-green-600">Verified ✓</span>
                ) : (
                  <span className="text-red-600">Not verified ✗</span>
                )}
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-600">Last updated</p>
              <p className="font-medium">
                {userData?.updated_at || user.updated_at
                  ? new Date(userData?.updated_at || user.updated_at).toLocaleDateString()
                  : 'Not available'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile