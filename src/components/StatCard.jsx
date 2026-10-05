function StatCard({ titulo, valor, mensagem, cor, icone }) {
    return (
        <div className="card border-0 shadow-sm p-3 bg-white rounded-3">
            <span className="text-muted small fw-bold text-uppercase">{titulo}</span>
            <h2 className={`fw-bold my-1 ${cor === 'danger' ? 'text-danger' : 'text-dark'}`}>{valor}</h2>
            <small className={`text-${cor} fw-bold`}>
                {icone && (
                    <i className={`bi bi-${icone} me-1`}></i>
                )}

                {mensagem}
            </small>
        </div>
    )
}

export default StatCard