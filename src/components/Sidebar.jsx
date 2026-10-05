import './Sidebar.css'

// IMPORT FUNÇÃO REACT-ROUTER-DOM
import { NavLink, Link } from 'react-router-dom'

function Aside({mostrarBotao}) {
    return(
        <aside className="col-md-3 col-lg-2 bg-white border-end min-vh-100 p-3 d-flex flex-column justify-content-between">
            <div>
                <div className="d-flex align-items-center gap-2 mb-4 px-2">
                    <i className="bi bi-car-front-fill text-danger-custom fs-3"></i>
                    <div>
                        <div className="fw-black text-danger-custom lh-1 fs-5" style={{fontWeight: 800}}>AutoNoMoz</div>
                        <div className="text-muted fw-bold text-uppercase" style={{fontSize: '0.65rem', letterSpacing: '1px'}}>Gestão de Frota</div>
                    </div>
                </div>

                <ul className="nav nav-pills flex-column gap-1">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link rounded-3 px-3 py-2"><i className="bi bi-grid-1x2 me-2"></i>Painel</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/inventario" className="nav-link rounded-3 px-3 py-2"><i className="bi bi-box-seam me-2"></i>Inventário</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/movimentacoes" className="nav-link rounded-3 px-3 py-2"><i className="bi bi-arrow-down-up me-2"></i>Movimentações</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/fornecedores" className="nav-link rounded-3 px-3 py-2"><i className="bi bi-truck me-2"></i>Fornecedores</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/produtos" className="nav-link rounded-3 px-3 py-2"><i className="bi bi-plus me-2"></i>Cadastrar Item</NavLink>
                    </li>
                </ul>
            </div>

            {mostrarBotao && (
                <Link to="/produtos" className="btn btn-danger w-100 fw-bold py-2 rounded-3 mb-3 d-flex align-items-center justify-content-center gap-2 m-auto text-uppercase">
                    <i className="bi bi-plus-lg"></i>
                    Novo Estoque
                </Link>
            )}

            <div className="border-top pt-3">
                <button className="btn btn-link nav-link small text-danger p-0 px-2 m-auto"><i className="bi bi-box-arrow-right me-2"></i> Sair do Sistema</button>
            </div>
        </aside>
    )
}

export default Aside