const tipos = {
    ENTRADA: {
        label: "ENTRADA",
        badge: "bg-sucess-subtle text-sucess",
        qtd: "text-sucess",
        sinal: "+"
    },
    SAIDA: {
        label: "SAIDA",
        badge: "bg-danger-subtle text-danger",
        qtd: "text-danger",
        sinal: "-"
    },
    AJUSTE: {
        label: "AJUSTE",
        badge: "bg-warning-subtle text-dark",
        qtd: "",
        sinal: ""
    }
}

function TableMovimentacoes({ movimentacoes = [] }) {
    return (
        <div className="card border-0 shadow-sm rounded-3 overflow-hidden">
            <div className="table-responsive">
                <table className="table table-hover align-middle mb-0">
                    <thead className="table-light">
                        <tr className="small text-muted fw-bold">
                            <th className="ps-3 text-uppercase">Data / Hora</th>
                            <th className="text-uppercase">Produto</th>
                            <th className="text-uppercase">Tipo</th>
                            <th className="text-uppercase">Qtd</th>
                            <th className="text-uppercase">Responsável</th>
                            <th className="text-uppercase">Motivo / Observação</th>
                        </tr>
                    </thead>

                    <tbody>
                        {movimentacoes.length === 0 ? (
                            <tr>
                                <td colSpan={6} className="text-center text-muted py-4">
                                    Nenhuma movimentação encontrada.
                                </td>
                            </tr>
                        ) : (
                            movimentacoes.map((mov) => {
                                const tipo = tipos[mov.tipo]

                                return (
                                    <tr key={mov.id}>
                                        <td className="ps-3 text-muted small">{mov.dataHora}</td>
                                        <td className="fw-bold">{mov.produto}</td>
                                        <td>
                                            <span className={`badge fw-bold ${tipo.badge}`}>{tipo.label}</span>
                                        </td>
                                        <td className={`fw-bold ${tipo.qtd}`}>{tipo.sinal}{mov.quantidade}</td>
                                        <td>{mov.responsavel}</td>
                                        <td className="small text-muted">{mov.motivo}</td>
                                    </tr>
                                )
                            })
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TableMovimentacoes