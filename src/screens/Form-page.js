import React, { useState } from "react";

const FormPage = () => {

    const  [inputValue, updateInputValue] = useState({
        nameField :"",
        emailField :"",
        passwordField :"",
        birthField :"",
        genderField :"",
        hobbiesField :[],
        qualificationField :"",
        address :""

    })

    const getTargetaValue = (event) =>{

        if(event.target.id === "hobbiesField"){
            if(event.target.checked){
                inputValue.hobbiesField.push(event.target.value)
            }
            else{
                const index = inputValue.hobbiesField.indexOf(event.target.value);
                inputValue.hobbiesField.splice(index, 1);
            }
        }

        else{
            updateInputValue({...inputValue, [event.target.id] : event.target.value})
        }

    }

    const submitValue = () =>{
        console.log(inputValue)
    }

    return (
        <div>
            <div>
                <label>Name :</label>
                <input id="nameField" type="text" placeholder="name..." onChange={getTargetaValue}></input>
            </div>
            <div>
                <label>Email :</label>
                <input id="emailField" type="text" placeholder="email..." onChange={getTargetaValue}></input>
            </div>
            <div>
                <label>password :</label>
                <input id="passwordField" type="password" placeholder="password..." onChange={getTargetaValue}></input>
            </div>
            <div>
                <label>DOB :</label>
                <input id="birthField" type="date" onChange={getTargetaValue}></input>
            </div>
            <div>
                <label>Gender :</label>
                <input value="Male" name="gender" id="genderField" type="radio" onChange={getTargetaValue}></input>Male
                <input value="Female" name="gender" id="genderField" type="radio" onChange={getTargetaValue}></input>Female
                <input value="Other" name="gender" id="genderField" type="radio" onChange={getTargetaValue}></input>Other
            </div>
            <div>
                <label>Hobbies :</label>
                <input id="hobbiesField" type="checkbox" onChange={getTargetaValue} value="Cricket"></input>Cricket
                <input id="hobbiesField" type="checkbox" onChange={getTargetaValue} value="Football"></input>Footbal
                <input id="hobbiesField" type="checkbox" onChange={getTargetaValue} value="Baseball"></input>Baseball
                <input id="hobbiesField" type="checkbox" onChange={getTargetaValue} value="Vollyball"></input>Vollyball
                <input id="hobbiesField" type="checkbox" onChange={getTargetaValue} value="Kabbadi"></input>Kabbadi
            </div>
            <div>
                <label>Qualification :</label>
                <select id="qualificationField" onChange={getTargetaValue}>
                    <option>select your qualification</option>
                    <option>bachelor of acts an science</option>
                    <option>bachelor of engineering</option>
                    <option>master of acts and science</option>
                    <option>master of engineering</option>
                </select>
            </div>
            <div>
                <label id="addressField">Address :</label>
                <textarea placeholder="enter your address" onChange={getTargetaValue}></textarea>
            </div>
            <div>
                <button onClick={()=>submitValue()}>submit</button>
            </div>
        </div>
    )
}

export default FormPage;