import React, {useEffect, useState} from "react";
import "./EmployeeDetails.css"
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import {getUser} from "../api/index"
import { baseURL } from "../api/index";
import User from "../Assets/user.svg"
import axios from "axios";


const EmployeeDetails = () => {
const [user, setUser] = useState({})

const navigate = useNavigate()
const {logoutUser} = useAuth()

const getImage = async (key) => {
    try {
      let { data } = await axios.get(
        // `${BASE_URL}/common/view?key=${key}`,
        key,
        {
          responseType: "blob",
          headers: { application: "EMBIFI-WEBSITE" },
          withCredentials: true,
        }
      );
      return new Promise((resolve, _) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.readAsDataURL(data);
      });
    } catch (error) {
      console.log(error)
    }
  };

const getData = async() => {
    const {data} = await getUser()
    console.log(data?.data)
    let response = data?.data
    let key_temp = `${baseURL}/common/view?key=${response?.key}`;
      let b64 = await getImage(key_temp);
      response.image = b64;
    setUser(response)
}
useEffect(()=> {
getData()
},[])


    return (
        <div className="main-cont">
            <div className="details-cont">
                <div className="logo-img">
                    <img
                        className="logo-src"
                        src="https://drilca9ckdzo8.cloudfront.net/white.svg"
                        draggable="false"
                        style={{
                            width: "250px",
                            transition: "all 1s",
                        }} />
                </div>
                <div className="welcome-font">
                    Welcome, {user?.name}
                </div>
                <div className=" details-card">
                    <div className="card-details-left">
                        <span className="span-1">{user?.name || `N/A`} </span>
                        <span className="span-2">{user?.job_title || `N/A`}</span>
                        <span className="span-3">{user?.about || `N/A`}
                        </span>
                    </div>
                    <div className="card-details-right">
                        <img className="img-detail" src={user?.image || User}></img>
                    </div>
                </div>
                <div className="card" onClick={() =>
              navigate('/personal-details',{state: {user: user}})
            }>
                    Edit personal details
                </div>
                <div className="card" onClick={() =>
              navigate('/my-blog')
            }>
                    My blog
                </div>
                <button className="btn-logout" onClick={logoutUser}>
                    Logout
                </button>
            </div>
        </div>
    )
}
export default EmployeeDetails;