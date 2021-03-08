import continentLogo from './continental_logo.svg';

const ContinentalLogo = ()=>{
    return (
        <nav class="navbar navbar-expand-sm bg-light d-flex justify-content-end">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link bg-warning" href="#">
                        <img src={continentLogo}></img>
                    </a>
                </li>
            </ul>
      </nav>  
    );
}

export default ContinentalLogo;