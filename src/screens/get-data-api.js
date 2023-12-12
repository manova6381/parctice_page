import React, { useState } from "react";
import axios from "axios";

const GetDataApi = () => {

    const [profileDataList, updateProfileDataList] = useState([]);

    const loadUser = () => {

        const url = "https://reqres.in/api/unknown/2";

        axios.get(url)
            .then((response) => {
                console.log(response)
                updateProfileDataList(response.data.data);
            })
            .catch((error) => {
                console.error(error);
            })
    }

    let userProfileDataMap = profileDataList.map((value, index) => {
        return (
            <tr key={index}>
                <td>{value.name}</td>
                <td>{value.id}</td>
                <td>{value.pantone_value}</td>
                <td>{value.year}</td>
                <td>{value.color}</td>
            </tr>
        )
    })
    return (
        <div>
            <h2>Get Data API</h2>
            <button onClick={() => loadUser()}>get data</button>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>ID</th>
                        <th>Pantone_Value</th>
                        <th>Year</th>
                        <th>Color</th>
                    </tr>
                </thead>
                <tbody>
                    {userProfileDataMap}
                </tbody>
            </table>
        </div>
    )
}

export default GetDataApi;