function Header({ titulo }) {
    return (
        <header className="bg-white border-bottom p-3 d-flex justify-content-between align-items-center shadow-sm">
            <h5 className="m-0 fw-bold text-dark text-capitalize">{titulo}</h5>
            <button className="btn btn-outline-danger btn-sm fw-bold text-uppercase">Sair</button>
        </header>
    )
}

export default Header