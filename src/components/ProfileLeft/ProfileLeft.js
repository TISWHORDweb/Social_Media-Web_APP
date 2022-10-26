import React from 'react'
import FollowersCard from '../FollowersCard/FollowersCard'
import InfoCard from '../InfoCard/InfoCard'
import LogoSearch from '../LogoSearch/LogoSearch'
import './ProfileLeft.css'

const ProfileLeft = () => {
  return (
    <div>
        <div className="ProfileLeft">
            <LogoSearch />
            <InfoCard />
            <FollowersCard />
        </div>
    </div>
  )
}

export default ProfileLeft