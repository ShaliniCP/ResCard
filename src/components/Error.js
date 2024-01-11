import { useRouteError } from "react-router-dom";

const Error=()=>{
    const err=useRouteError();
    console.log(err)
    return(
        <div>
            <h1>Oops!...Something Went wrong</h1>
            <h1>{err.status} : {err.statusText}</h1>
        </div>
    )
}

export default Error;