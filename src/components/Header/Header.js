import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import { setObjective } from "../../redux/slices/objectiveSlice";
import { setUser, userSelector } from "../../redux/slices/userSlice";
import "./Header.css"

const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector(userSelector)

    const logout = () => {
        localStorage.removeItem("userTokens")
        dispatch(setUser(false))
        dispatch(setObjective({}))
        navigate("../main")
    }

    return (
        <header>
            <div>{`user presence ${user}`}</div>
            <div>
                <button onClick={() => navigate("../login", {replace: true})}>Login</button>
                <button onClick={logout}>Log out</button>
            </div>
        </header>
    )
}

export default Header