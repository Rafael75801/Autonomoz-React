import { useNavigate } from "react-router-dom"

function Header({ titulo }) {
    const navigate = useNavigate()

    function handleSair() {navigate('/login')}

    return (
        <header className="bg-white border-bottom p-3 d-flex justify-content-between align-items-center shadow-sm">
            <h5 className="m-0 fw-bold text-dark text-capitalize">{titulo}</h5>
            <button className="btn btn-outline-danger btn-sm fw-bold text-uppercase" onClick={handleSair}>Sair</button>
        </header>
    )
}

export default Header