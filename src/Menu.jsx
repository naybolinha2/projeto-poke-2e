const Menu = () => {

    return (
        <div>
            <ul className="nav">
            <li className="nav-item">
                <a class="nav-link active" href="#">
                    Active
                </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/home">
                        Home
                    </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/viacep">
                    ViaCep
                  </a>
                </li>
            </ul>
        </div>
        
    )
}
export default Menu