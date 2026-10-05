import Header from "../components/Header"
import StatCard from "../components/StatCard"

import { Link } from 'react-router-dom'

function Inventario(){
    const metricas = [
        {
            titulo: 'Total de Itens',
            valor: '1.284',
            adicional: '+12%'
        },
        {
            titulo: 'Valor em Estoque',
            valor: 'R$ 4.250.000'
        },
        {
            titulo: 'Estoque Crítico',
            valor: '18',
            adicional: 'SKUs',
            cor: 'danger'
        },
        {
            titulo: 'Giro de Inventário',
            valor: '4.2x'
        }
    ]

    return (
        <>
            <Header placeholder="Pesquisar por SKU, peças, veículos..." />

            <main className="p-4">
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 gap-3">

                    <div>
                        <h3 className="fw-bold m-0 text-dark">Inventário Global</h3>
                        <p className="text-muted small m-0">Gestão integrada em tempo real de itens de frota.</p>
                    </div>

                    <div className="d-flex gap-2">
                        <Link to="/movimentacoes" className="btn btn-outline-secondary fw-bold px-3 rounded-3"><i className="bi bi-arrow-down-up me-1"></i>Histórico</Link>

                        <Link to="/produtos" className="btn btn-danger fw-bold px-4 rounded-3"><i className="bi bi-plus-lg me-1"></i>Cadastrar Item</Link>
                    </div>

                </div>

                <div className="row row-cols-1 row-cols-sm-2 row-cols-xl-4 g-3 mb-4">
                    {metricas.map((metrica, index) => (
                        <div className="col" key={index}>
                            <StatCard
                             titulo={metrica.titulo}
                             valor={metrica.valor}
                             adicional={metrica.adicional}
                             cor={metrica.cor}
                            />
                        </div>
                    ))}
                </div>

                <div className="card border-0 shadow-sm rounded-3 overflow-hidden">
                    <div className="table-responsive">
                        <table className="table table-hover align-middle mb-0">
                            <thead className="table-light border-bottom">
                                <tr className="small text-muted fw-bold">
                                    <th className="ps-3">SKU</th>
                                    <th>Nome do Produto</th>
                                    <th>Categoria</th>
                                    <th>Marca</th>
                                    <th>Compatibilidade</th>
                                    <th>Preço de Venda</th>
                                    <th>QTD</th>
                                    <th>Ações de Estoque</th>
                                </tr>
                            </thead>

                            <tbody>
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Inventario