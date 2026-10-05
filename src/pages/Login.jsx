import { useState } from 'react'

import LoginForm from '../components/LoginForm'
import CadastroForm from '../components/CadastroForm'

const ABAS = [
    { id: 'login', label: 'Entrar' },
    { id: 'cadastro', label: 'Cadastrar' }
]

function Login() {
    const [aba, setAba] = useState('login')

    return (
        <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light p-3">
            <div className="card border-0 shadow rounded-4 overflow-hidden w-100" style={{ maxWidth: 440 }}>

                <div className="bg-danger text-white text-center p-4">
                    <h2 className="fw-bold m-0">AutonoMoz</h2>
                    <p className="small m-0 opacity-75">Sistema Avançado de Gestão</p>
                </div>

                <div className="p-4">
                    <div className="btn-group w-100 mb-4">
                        {ABAS.map((item) => (
                            <button
                                key={item.id}
                                type="button"
                                className={`btn fw-bold ${aba === item.id ? 'btn-danger' : 'btn-outline-secondary'}`}
                                onClick={() => setAba(item.id)}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>

                    {aba === 'login' ? (
                        <LoginForm onIrParaCadastro={() => setAba('cadastro')} />
                    ) : (
                        <CadastroForm onIrParaLogin={() => setAba('login')} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Login