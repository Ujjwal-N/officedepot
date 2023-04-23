import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
    const [validated, setValidated] = useState(() => {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            if (cookies[i].startsWith('adminAccess')) {
                return true;
            }
        }
        return false;
    });
    const adminPassword = "adminsOnly";
    const navigate = useNavigate();

    const validateLogin = (e) => {
        e.preventDefault();
        const userInput = e.target.adminPassword.value;

        if (userInput === adminPassword) {
            console.log('gonna set a cookie now');
            const expireDate = new Date(Date.now() + 60000).toUTCString();
            document.cookie = "adminAccess; expires=" + expireDate + "; path=/";
            setValidated(true);
        }
    }

    if (!validated) {
        return (
            <form onSubmit={validateLogin}>
                <input type="password" name="adminPassword" placeholder="Enter password" />
                <button type="submit">Submit</button>
            </form>
        )
    }

    return (
        navigate('/admin')
    )
}

export default AdminLogin;