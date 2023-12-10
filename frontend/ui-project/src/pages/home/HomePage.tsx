import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {Queries} from "../../constants/constants.ts";
import {useLoggedUser} from "../../hooks/useCustomQuery.ts";

export default function HomePage() {
    const {data: user} = useLoggedUser();
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem(Queries.TOKEN);
        if (token == null) navigate("/register");
    }, []);

    useEffect(() => {
        console.log(user)
    }, [user]);

    return (
        <>
            <div>Data: {user?.name}</div>
        </>
    )
}