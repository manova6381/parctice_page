import React, { useState } from "react";
import axios from "axios";

const UserProfile = () => {

    const [profileList, updateProfileList] = useState([]);

    const loadUser = () => {
        const url = "https://reqres.in/api/users?page=2";

        axios.get(url)
            .then((response) => {
                updateProfileList(response.data.data)
            })
            .catch((error) => {
                console.error(error);
                alert("pls conact admin")
            })
    }

    const userProfileMap = profileList.map((value, index) => {
        return(
            <tr key={index}>
                <td>{value.id}</td>
                <td>{value.first_name}</td>
                <td>{value.last_name}</td>
                <td>{value.email}</td>
                <td>
                    <img src={value.avatar} alt=""></img>
                </td>
            </tr>
        )
    })

    return (
        <div>
            <h3>User Profile</h3>
            <button onClick={() => loadUser()}>Load User</button>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email ID</th>
                        <th>Picture</th>
                    </tr>
                </thead>
                <tbody>
                    {userProfileMap}
                </tbody>
            </table>
        </div>
    )
}

export default UserProfile;