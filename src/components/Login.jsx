import axios from 'axios'
import React, { useState } from 'react'

const Login = () => {
    const [data, setData] = useState(
        {
            "email": "",
            "password": ""

        }
    )
    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }
    const readvalue = () => {

        console.log(data)
        axios.post("http://localhost:8080/signIn", data).then(
            (response) => {
                console.log(response.data)
                if (response.data.status == "success") {
                    alert("Login Success")
                }
                else {
                    alert("Failed to Login")
                }
            }
        )
    }

    return (
        <div>

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-4">
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Email Id</label>
                                <input type="text" name="email" value={data.email} onChange={inputHandler} className="form-control" />
                            </div>

                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Password</label>
                                <input type="text" name="password" value={data.password} onChange={inputHandler} className="form-control" />
                            </div>

                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <button className="btn btn-success" onClick={readvalue}>Sign In</button>

                            </div>


                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Login