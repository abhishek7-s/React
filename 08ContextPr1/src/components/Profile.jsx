import React, {useContext} from 'react'
import UserContext from '../Context/usercontext'


function Profile() {
    const {user} = useContext(UserContext)

    if (!user) return <div>PLease Login</div>
    return <div> Welcome {user.Username} </div>
}

export default Profile
