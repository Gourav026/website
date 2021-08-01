import React from 'react'

export const Register = () => {
    return (
        <>
        <form action="">
            <div className="acc">
                <label htmlFor="Username">Username</label>
                <input type="text" name="Username" id="Username" />
            </div>
            <div className="acc">
                <label htmlFor="email">email</label>
                <input type="text" name="email" id="email" />
            </div>
            <div className="acc">
                <label htmlFor="phone">phone</label>
                <input type="text" name="phone" id="phone" />
            </div>
            <div className="acc">
                <label htmlFor="Password">Password</label>
                <input type="text" name="Password" id="Password" />
            </div>
            <button type="submit" className="acc">Register</button>
        </form>
        </>
    )
}
