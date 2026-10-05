import Header from "../components/Header"
import TableMovimentacoes from "../components/TableMovimentacoes"

function Movimentacoes() {
    const movimentacoes = [
        {
            id: 1,
            dataHora: '14/09/2026 - 09:30',
            produto: 'Pastilha de Freio Cerâmica',
            tipo: 'ENTRADA',
            quantidade: 10,
            responsavel: 'Carlos Eduardo',
            motivo: 'Reposição de Estoque Bosch NF-8812'
        },
        {
            id: 2,
            dataHora: '14/09/2026 - 08:15',
            produto: 'Motor V6 3.5L EcoBoost',
            tipo: "SAIDA",
            quantidade: 1,
            responsavel: 'Marcos Silva',
            motivo: 'Substituição Veículo #204'
        },
        {
            id: 3,
            dataHora: '13/09/2026 - 17:40',
            produto: 'Sensor LiDAR Nível 4',
            tipo: 'AJUSTE',
            quantidade: 15,
            responsavel: 'Auditoria Interna',
            motivo: 'Recontagem física trimestral'
        }
    ]

    return (
        <>
            <Header titulo="Movimentações" />

            <main className="p-4">
                <div className="mb-4">
                    <h3 className="fw-bold m-0 text-dark">Histórico de Movimentações</h3>
                    <p className="text-muted small m-0">Entradas, saídas e ajustes de estoque registrados.</p>
                </div>

                <TableMovimentacoes movimentacoes={movimentacoes} />
            </main>
        </>
    )
}

export default Movimentacoes