import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ContextProvider } from "../auth/AuthProvider";



function PrivateRouter({children}) {
    const { user, loading } = useContext(ContextProvider);
    // const role = userRole?.role;
    const navigate = useNavigate()


    if (loading) {
        return <div>Loading...</div>
    }

    if (user) {
        return children
    }

    return navigate('/');
}

export default PrivateRouter