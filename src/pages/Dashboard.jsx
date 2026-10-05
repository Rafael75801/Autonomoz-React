import Header from "../components/Header"
import StatCard from "../components/StatCard"

function Dashboard() {

    const indicadores = [
        {
            titulo: "Veículos em Operação",
            valor: '342',
            mensagem: "98% de disponibilidade",
            cor: "success",
            icone: "arrow-up"
        },
        {
            titulo: "Alertas de Manutenção",
            valor: "12",
            mensagem: "Requer atenção imediata",
            cor: "danger",
        },
        {
            titulo: "Peças Solicitadas",
            valor: "89",
            mensagem: "Envio em andamento",
            cor: "primary"
        }
    ]

    return (
        <>
            <Header titulo="Painel Visão Geral" />

            <main className="p-4">
                <div className="row row-cols-1 row-cols-md-3 g-3 mb-4">
                    {indicadores.map((indicador, index) => (
                        <div className="col" key={index}>
                            <StatCard
                             titulo={indicador.titulo}
                             valor={indicador.valor}
                             mensagem={indicador.mensagem}
                             cor={indicador.cor}
                             icone={indicador.icone}
                            />
                        </div>
                    ))}
                </div>
            </main>
        </>
    )
}

export default Dashboard