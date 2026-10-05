function TableFornecedores({ fornecedores = [], onEditar }) {
    return(
        <div className="card border-0 shadow-sm rounded-3 overflow-hidden">
            <div className="table-responsive">
                <table className="table table-hover align-middle mb-0">
                    <thead className="table-light">
                        <tr className="small text-muted fw-bold">
                            <th className="ps-3 text-uppercase">CNPJ</th>
                            <th className="text-uppercase">Razão Social</th>
                            <th className="text-uppercase">Contato</th>
                            <th className="text-uppercase">Telefone</th>
                            <th className="text-uppercase">Email</th>
                            <th className="text-end pe-3 text-uppercase">Ações</th>
                        </tr>
                    </thead>

                    <tbody>
                        {fornecedores.length === 0 ? (
                            <tr>
                                <td colSpan={6} className="text-center text-muted py-4">
                                    Nenhum fornecedor cadastrado.
                                </td>
                            </tr>
                        ) : (
                            fornecedores.map((fornecedor) => (
                                <tr key={fornecedor.id}>
                                    <td className="ps-3 fw-bold text-muted small">{fornecedor.cnpj}</td>
                                    <td className="fw-bold">{fornecedor.razaoSocial}</td>
                                    <td>{fornecedor.contato}</td>
                                    <td>{fornecedor.telefone}</td>
                                    <td>{fornecedor.email}</td>
                                    <td className="text-end pe-3">
                                        <button
                                         className="btn btn-sm btn-outline-secondary"
                                         onClick={() => onEditar?.(fornecedor)} 
                                        > Editar </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TableFornecedores