import React, { useState } from 'react';
import { useNavigate } from 'react-router';

export default function Login() {
    const [user, setUser] = useState({
        email: '',
        password: '',
        verifyPassword: ''
    });

    const navigate = useNavigate();

    const handleChange = ({ target: { name, value } }) => {
        //Captura de datos con misma estructura de object
        setUser({ ...user, [name]: value })
    }

    const handelSubmit = (e) => {
        e.preventDefault();
        if (user.email != "") {
            navigate('/home')
            console.log('enviado')
        }
    }
    return (
        <>
            <section class="material-half-bg">
                <div class="cover"></div>
            </section>
            <section className="login-content">
                <div className="logo">
                    <h1>ADMIN</h1>
                </div>

                <div className="login-box">
                    <form className="login-form" onSubmit={handelSubmit}>
                        <div className="form-group">
                            <label class="control-label">Email</label>
                            <input onChange={handleChange} name="email" type="text" placeholder="Email" className="form-control" />
                        </div>

                        <div className="form-group">
                            <label class="control-label">Password</label>
                            <input onChange={handleChange} name="password" type="password" placeholder="********" className="form-control" />
                        </div>

                        <div className="form-group">
                            <label class="control-label">Repetir password</label>
                            <input onChange={handleChange} name="verify-password" type="password" placeholder="********" className="form-control" />
                        </div>
                        <button className="btn btn-outline-success btn-block btn-sm">Ingresar</button>
                        <div class="form-group mt-3">
                            <p class="semibold-text mb-0"><a href="#" data-toggle="flip"><i class="fa fa-angle-left fa-fw"></i> Back to Login</a></p>
                        </div>
                    </form>

                </div>

            </section>

        </>

    );
}
