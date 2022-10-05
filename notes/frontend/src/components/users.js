import React from "react";

const UsersItem = ({user})=>{
    return(<tr>
            <td>{user.username}</td>
            <td>{user.first_name}</td>
            <td>{user.last_name}</td>

        </tr>
        )
}

const UsersList=({users}) => {
    return(<table>
        <th>User name</th>
        <th>First name</th>
        <th>Last name</th>
        {users.map((user_) => <UsersItem user={user_}/>)}
    </table>
    )
}


export default UsersList