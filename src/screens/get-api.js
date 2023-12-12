import React, { useState } from "react";
import axios from "axios";

const GetApiUser = () => {

    const [profileList, updateProfileList] = useState([]);

    const loadUser = () => {
        const url = "https://reqres.in/api/unknown";

        axios.get(url)
            .then((response) => {
                console.log(response);
                updateProfileList(response.data.data);
            })
            .catch((error) => {
                console.error(error);
                alert("pls connnect network")
            })

    };

    let userProfileMap = profileList.map((value, index) => {
        return (
            <tr key={index}>
                <td>{value.id}</td>
                <td>{value.name}</td>
                <td>{value.pantone_value}</td>
                <td>{value.year}</td>
            </tr>
        )
    })

    return (
        <div>
            <h2>user Profile</h2>
            <button onClick={() => loadUser()}>get user</button>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Pantone value</th>
                        <th>Year</th>
                    </tr>
                </thead>
                <tbody>{userProfileMap}</tbody>
            </table>
        </div>
    )
}

export default GetApiUser;