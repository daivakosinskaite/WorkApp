import WorksTable from "../worksTable/WorksTable"
import { Link } from "react-router-dom"
import * as service from "../../services/WorksCrudServices";
import { useEffect, useState } from "react";
const Works = ()=>{
    const [works, setWorks] = useState([]);

    useEffect(()=>{
        service.getAllWorks(works=>{
            setWorks(works)
        })
    },[])

    console.log('from works component',works)
    return(
        <div className="container">
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <Link className="nav-item btn btn-primary" to="/add-work">Pridėti atliktą darbą</Link>
                </li>
            </ul>
            <h2>Works</h2>
                <WorksTable data={works}/>
        </div>
    )
}

export default Works

