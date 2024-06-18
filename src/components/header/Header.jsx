import { Link } from "react-router-dom"
import Profile from "../user/profile/Profile"
const Header = ()=>{
    return(
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <Link className="navbar-brand" to="/">Time logger</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <Profile/>
                </div>
    </div>
    </nav>
    )
}

export default Header