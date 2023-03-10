import React, { useState, useEffect } from "react";
import supabase from "../config/SupabaseConfig";
import { useNavigate } from "react-router-dom"; 

const Success = () => {
    const navigate = useNavigate()
    const [ user, setUser ] = useState({})

    const logout = async () => {
        const {error} = await supabase.auth.signOut();
        navigate("/")
    }

    useEffect(() => {
        const getUserData = async () => {
            await supabase.auth.getUser().then((value) => {
                if(value.data?.user){
                    setUser(value.data.user);
                }
            })
        }
        getUserData();
    }, []);

    return (
        <div>
            { Object.keys(user).length !== 0 ?

                <>
                    <h1>User Logged In</h1>
                    <button onClick={() => logout()}>Log out</button>
                </>
                :
                <>
                    User Logged Out
                </>
            
            }
        </div>
    )
}

export default Success;