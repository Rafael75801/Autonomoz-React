import Header from "../components/Header"
import TableFornecedores from "../components/TableFornecedores"

function Fornecedores() {
    const fornecedores = [
        {
            id: 1,
            cnpj: '00.123.456/0001-89',
            razaoSocial: 'Bosch do Brasil Ltda',
            contato: 'Ricardo Alves',
            telefone: '(11) 4002-8922',
            email: 'contato@bosch.com.br'
        },
        {
            id: 2,
            cnpj: '11.987.654/0001-10',
            razaoSocial: 'Tesla Parts & Motors Brasil',
            contato: 'Ana Beatriz',
            telefone: '(11) 3090-1122',
            email: 'suporte@tesla.com'
        }
    ]

    function handleEditar(fornecedor){
        alert(`Editar fornecedor: ${fornecedor.razaoSocial}`)
    }

    return(
        <>
            <Header titulo="Fornecedores" />

            <main className="p-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <div>
                        <h3 className="fw-bold m-0 text-dark">Fornecedores Cadastrados</h3>
                        <p className="text-muted small m-0">Gestão de parceiros e fornecedores de componentes</p>
                    </div>

                    <button className="btn btn-danger fw-bold rounded-3" onClick={() => alert('Novo fornecedor')}>
                        <i className="bi bi-plus-lg me- 1"></i> Cadastrar Fornecedor
                    </button>
                </div>

                <TableFornecedores fornecedores={fornecedores} onEditar={handleEditar} />
            </main>
        </>
    )
}

export default Fornecedores