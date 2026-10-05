const PERFIS = [
    { id: 'gerente', label: 'Gerente', icone: 'fa-user-gear' },
    { id: 'estoquista', label: 'Estoquista', icone: 'fa-box-archive' }
]

function SeletorPerfil({ value, onChange }) {
    return (
        <div className="row g-2 mb-4">
            {PERFIS.map((item) => (
                <div className="col-6" key={item.id}>
                    <button
                        type="button"
                        className={`btn w-100 py-3 fw-bold rounded-3 ${value === item.id ? 'btn-danger' : 'btn-outline-secondary'}`}
                        onClick={() => onChange(item.id)}
                    >
                        <i className={`fa-solid ${item.icone} d-block fs-4 mb-1`}></i>
                        {item.label}
                    </button>
                </div>
            ))}
        </div>
    )
}

export default SeletorPerfil