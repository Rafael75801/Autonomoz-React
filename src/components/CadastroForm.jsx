import { useState } from 'react'

import SeletorPerfil from './SeletorPerfil.jsx'
import CampoSenha from './CampoSenha'
import formatarCPF from '../utils/formatarCPF'

function CadastroForm({ onIrParaLogin }) {
    const [perfil, setPerfil] = useState('gerente')
    const [nome, setNome] = useState('')
    const [cpf, setCpf] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmar, setConfirmar] = useState('')
    const [erro, setErro] = useState('')

    function handleSubmit(e) {
        e.preventDefault()

        if (senha !== confirmar) {
            setErro('As senhas não conferem.')
            return
        }

        setErro('')

        // TODO: enviar para a API com { perfil, nome, cpf, email, senha }
        alert('Cadastro realizado! Faça login para continuar.')
        onIrParaLogin()
    }

    return (
        <form onSubmit={handleSubmit}>
            <p className="text-muted small text-center mb-3">
                Preencha os dados abaixo para criar seu acesso
            </p>

            <SeletorPerfil value={perfil} onChange={setPerfil} />

            <div className="mb-3">
                <label htmlFor="cad-nome" className="form-label fw-bold small text-muted">NOME COMPLETO</label>
                <div className="input-group">
                    <span className="input-group-text bg-white text-muted">
                        <i className="fa-solid fa-user"></i>
                    </span>
                    <input
                        type="text"
                        id="cad-nome"
                        className="form-control"
                        placeholder="Seu nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                    />
                </div>
            </div>

            <div className="mb-3">
                <label htmlFor="cad-cpf" className="form-label fw-bold small text-muted">CPF</label>
                <div className="input-group">
                    <span className="input-group-text bg-white text-muted">
                        <i className="fa-solid fa-id-card"></i>
                    </span>
                    <input
                        type="text"
                        id="cad-cpf"
                        className="form-control"
                        placeholder="000.000.000-00"
                        inputMode="numeric"
                        value={cpf}
                        onChange={(e) => setCpf(formatarCPF(e.target.value))}
                        required
                    />
                </div>
            </div>

            <div className="mb-3">
                <label htmlFor="cad-email" className="form-label fw-bold small text-muted">EMAIL</label>
                <div className="input-group">
                    <span className="input-group-text bg-white text-muted">
                        <i className="fa-solid fa-at"></i>
                    </span>
                    <input
                        type="email"
                        id="cad-email"
                        className="form-control"
                        placeholder="nome@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
            </div>

            <CampoSenha
                id="cad-senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                placeholder="Crie uma senha"
                className="mb-3"
            />

            <CampoSenha
                id="cad-confirmar"
                label="CONFIRMAR SENHA"
                value={confirmar}
                onChange={(e) => setConfirmar(e.target.value)}
                placeholder="Repita a senha"
                className="mb-4"
            />

            {erro && <div className="alert alert-danger small py-2">{erro}</div>}

            <button type="submit" className="btn btn-danger w-100 fw-bold py-2 rounded-3">
                Criar Conta <i className="fa-solid fa-arrow-right ms-1"></i>
            </button>

            <div className="text-center mt-3">
                <button type="button" className="btn btn-link small fw-bold text-decoration-none p-0" onClick={onIrParaLogin}>
                    Já tem acesso? Entrar
                </button>
            </div>
        </form>
    )
}

export default CadastroForm