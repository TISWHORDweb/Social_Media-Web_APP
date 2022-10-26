import React from 'react'
import "./FolowersCard.css"
import { Followers } from '../../Data/FollowersData'

const FollowersCard = () => {
  return (
    <div>
        <div className="FollowersCard">
            <h3>Who is Following you</h3>

            {Followers.map((follower, id) =>{
                return(
                    <div className="followers">
                        <div className="">
                            <img src={follower.img} alt="" className='followerImg'/>
                            <div className="name">
                                <span>{follower.name}</span>
                                <span>{follower.username}</span>
                            </div>
                        </div>
                        <div className="">
                        <button className='button fc-button'>Follow</button>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default FollowersCard