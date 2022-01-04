import React from "react";
import { ErrorMessage, withFormik} from "formik";
import { Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import * as Yup from "yup";
import { connect } from "react-redux";
import { USER_SIGN_IN_API } from '../../redux/types/types'

function Login(props) {
    const { values, touched, errors, handleChange, handleBlur, handleSubmit } = props;

    return (
        <form id="sigup" className="signup" onSubmit={handleSubmit}>
                <h1 >Login</h1>
                <span className="signup-title">Email</span>
                <input type="text" className="form-control" name="username" onChange={handleChange} />
                <ErrorMessage name="username" render={ msg => <div className="text-red-500">*{msg}</div>}/>
                <span className="signup-title">Password</span>
                <Input.Password
                    placeholder="Input password"
                    className="form-control"
                    name="password"
                    iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    onChange={handleChange}
                />
                <ErrorMessage name="password" render={msg => <div className="text-red-500">*{msg}</div>} />
                <button type="submit" className="btn-submit">Login</button>
                <div className="logo__signup">
                    <i className="fab fa-facebook text-blue-600"></i>
                    <i className="fab fa-instagram mx-4"></i>
                    <i className="fab fa-google text-red-600"></i>
                </div>
            </form>
    );
}

const formWithFormik = withFormik({
    mapPropsToValues: () => ({
        username: "",
        password: "",
    }),
    validationSchema: Yup.object().shape({
        // username: Yup.string().required('email is required').email('Invalid Email!'),
        // password: Yup.string().required('password is required'),
    }),
    handleSubmit: (values, {props}) => {
        console.log(values)
        props.dispatch({
            type: USER_SIGN_IN_API,
            userLogin : values
        })
    },
    displayName: "Form Login",
})(Login);


export default connect()(formWithFormik)