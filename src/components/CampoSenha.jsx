import { useState } from 'react'

function CampoSenha({ id, label = 'SENHA', value, onChange, placeholder = 'Sua senha', extra, className = 'mb-4' }) {
    const [mostrar, setMostrar] = useState(false)

    return (
        <div className={className}>
            <div className="d-flex justify-content-between align-items-center">
                <label htmlFor={id} className="form-label fw-bold small text-muted">{label}</label>
                {extra}
            </div>

            <div className="input-group">
                <span className="input-group-text bg-white text-muted">
                    <i className="fa-solid fa-lock"></i>
                </span>
                <input
                    type={mostrar ? 'text' : 'password'}
                    id={id}
                    className="form-control"
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    required
                />
                <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => setMostrar((atual) => !atual)}
                    aria-label={mostrar ? 'Ocultar senha' : 'Mostrar senha'}
                >
                    <i className={`fa-solid ${mostrar ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                </button>
            </div>
        </div>
    )
}

export default CampoSenha