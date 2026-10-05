import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import SeletorPerfil from './SeletorPerfil.jsx'
import CampoSenha from './CampoSenha.jsx'

function LoginForm({ onIrParaCadastro }) {
    const navigate = useNavigate()

    const [perfil, setPerfil] = useState('gerente')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    function handleSubmit(e) {
        e.preventDefault()

        // TODO: validar na API com { perfil, email, senha }
        navigate('/')
    }

    return (
        <form onSubmit={handleSubmit}>
            <p className="text-muted small text-center mb-3">
                Insira suas credenciais para acessar o sistema
            </p>

            <SeletorPerfil value={perfil} onChange={setPerfil} />

            <div className="mb-3">
                <label htmlFor="login-email" className="form-label fw-bold small text-muted">EMAIL</label>
                <div className="input-group">
                    <span className="input-group-text bg-white text-muted">
                        <i className="fa-solid fa-at"></i>
                    </span>
                    <input
                        type="email"
                        id="login-email"
                        className="form-control"
                        placeholder="nome@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
            </div>

            <CampoSenha
                id="login-senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                extra={
                    <button type="button" className="btn btn-link small p-0 mb-2 text-decoration-none">
                        Resetar Chave
                    </button>
                }
            />

            <button type="submit" className="btn btn-danger w-100 fw-bold py-2 rounded-3">
                Iniciar Sessão <i className="fa-solid fa-arrow-right ms-1"></i>
            </button>

            <div className="text-center mt-3">
                <button type="button" className="btn btn-link small fw-bold text-decoration-none p-0" onClick={onIrParaCadastro}>
                    Esqueceu seu acesso? Registre-se
                </button>
            </div>
        </form>
    )
}

export default LoginForm