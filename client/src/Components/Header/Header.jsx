import {Link} from "react-router-dom"


export default function Header(){
    return(
        <>
        <div className="header">
            <h1>CoursesRUD.</h1>
            <div>
                <div className="" ><Link to={"/admin"}>Администрирование</Link></div>
                <div ><Link to={"/"}>Просмотр</Link></div>
            </div>
        </div>
        </>
    )
}