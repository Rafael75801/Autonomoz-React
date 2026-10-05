import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import Header from "../components/Header"

const CATEGORIAS = [
    { id: 1, nome: 'Peças e Peças de Reposição' },
    { id: 2, nome: 'Veículos da Frota' }
]

const FORNECEDORES = [
    { id: 1, nome: 'Bosch Brasil' },
    { id: 2, nome: 'Tesla Motors' }
]

const FORM_INICIAL = {
    nome: '',
    sku: '',
    categoria: CATEGORIAS[0].id,
    fornecedor: FORNECEDORES[0].id,
    quantidade: 1,
    precoCusto: '',
    precoVenda: '',
    chassi: '',
    placa: '',
    ano: '',
    imagem: null
}

function ProdutosCadastrados() {
    const navigate = useNavigate()
    const [form, setForm] = useState(FORM_INICIAL)

    function handleChange(e) {
        const { name, value } = e.target
        setForm((atual) => ({ ...atual, [name]: value }))
    }

    function handleImagem(e) {
        setForm((atual) => ({ ...atual, imagem: e.target.files[0] ?? null }))
    }

    function handleSubmit(e) {
        e.preventDefault()

        // TODO: enviar para a API quando ela existir
        console.log('Produto cadastrado:', form)
        alert('Item salvo com sucesso!')

        navigate('/inventario')
    }

    return (
        <>
            <Header titulo="Cadastro de Produtos & Veículos" />

            <main className="p-4">
                <form onSubmit={handleSubmit}>

                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 gap-3">
                        <div>
                            <h4 className="fw-bold m-0">Novo Item no Estoque</h4>
                            <small className="text-muted">Preencha as informações detalhadas sobre a peça ou veículo.</small>
                        </div>

                        <div className="d-flex gap-2">
                            <Link to="/inventario" className="btn btn-light border px-4 fw-bold">Cancelar</Link>
                            <button type="submit" className="btn btn-danger px-4 fw-bold">Salvar Item</button>
                        </div>
                    </div>

                    <div className="row g-3 mb-3">
                        <div className="col-lg-8">
                            <div className="card border-0 shadow-sm p-4 rounded-3 bg-white h-100">
                                <h6 className="fw-bold mb-3 text-danger-custom"><i className="bi bi-info-circle me-2"></i>Informações Básicas</h6>

                                <div className="row g-3 mb-3">
                                    <div className="col-md-8">
                                        <label htmlFor="prod-nome" className="form-label fw-bold small text-muted">NOME DO PRODUTO / ITEM</label>
                                        <input
                                            type="text"
                                            id="prod-nome"
                                            name="nome"
                                            className="form-control"
                                            placeholder="Ex: Bateria Lithium 48V"
                                            value={form.nome}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor="prod-sku" className="form-label fw-bold small text-muted">CÓDIGO / SKU</label>
                                        <input
                                            type="text"
                                            id="prod-sku"
                                            name="sku"
                                            className="form-control"
                                            placeholder="SKU-8821"
                                            value={form.sku}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div className="row g-3">
                                    <div className="col-md-4">
                                        <label htmlFor="prod-categoria" className="form-label fw-bold small text-muted">CATEGORIA</label>
                                        <select
                                            id="prod-categoria"
                                            name="categoria"
                                            className="form-select"
                                            value={form.categoria}
                                            onChange={handleChange}
                                            required
                                        >
                                            {CATEGORIAS.map((cat) => (
                                                <option key={cat.id} value={cat.id}>{cat.nome}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="col-md-5">
                                        <label htmlFor="prod-fornecedor" className="form-label fw-bold small text-muted">FORNECEDOR / MARCA</label>
                                        <select
                                            id="prod-fornecedor"
                                            name="fornecedor"
                                            className="form-select"
                                            value={form.fornecedor}
                                            onChange={handleChange}
                                            required
                                        >
                                            {FORNECEDORES.map((forn) => (
                                                <option key={forn.id} value={forn.id}>{forn.nome}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="col-md-3">
                                        <label htmlFor="prod-qtd" className="form-label fw-bold small text-muted">QUANTIDADE</label>
                                        <input
                                            type="number"
                                            id="prod-qtd"
                                            name="quantidade"
                                            min="0"
                                            className="form-control"
                                            value={form.quantidade}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="card border-0 shadow-sm p-4 rounded-3 bg-white h-100 text-center d-flex flex-column justify-content-center align-items-center">
                                <i className="bi bi-cloud-arrow-up display-4 text-muted mb-2"></i>
                                <h6 className="fw-bold text-dark">Imagem do Produto</h6>
                                <p className="text-muted small">Anexe fotos para catalogação visual do estoque.</p>
                                <input
                                    type="file"
                                    id="file-img"
                                    accept="image/*"
                                    className="form-control form-control-sm"
                                    onChange={handleImagem}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="row g-3 mb-4">
                        <div className="col-lg-4">
                            <div className="card border-0 shadow-sm p-4 rounded-3 bg-white h-100">
                                <h6 className="fw-bold mb-3 text-danger-custom"><i className="bi bi-currency-dollar me-2"></i>Valores Financeiros</h6>

                                <div className="mb-3">
                                    <label htmlFor="prod-custo" className="form-label fw-bold small text-muted">PREÇO DE CUSTO (R$)</label>
                                    <input
                                        type="number"
                                        step="0.01"
                                        min="0"
                                        id="prod-custo"
                                        name="precoCusto"
                                        className="form-control"
                                        placeholder="0,00"
                                        value={form.precoCusto}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="prod-venda" className="form-label fw-bold small text-muted">PREÇO DE VENDA (R$)</label>
                                    <input
                                        type="number"
                                        step="0.01"
                                        min="0"
                                        id="prod-venda"
                                        name="precoVenda"
                                        className="form-control"
                                        placeholder="0,00"
                                        value={form.precoVenda}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-8">
                            <div className="card border-0 shadow-sm p-4 rounded-3 bg-white h-100">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <h6 className="fw-bold m-0 text-danger-custom"><i className="bi bi-car-front me-2"></i>Especificações Técnicas (Frota)</h6>
                                    <span className="badge bg-light text-dark border">Opcional</span>
                                </div>

                                <div className="row g-3 mb-2">
                                    <div className="col-md-5">
                                        <label htmlFor="prod-chassi" className="form-label fw-bold small text-muted">CHASSI / VIN</label>
                                        <input
                                            type="text"
                                            id="prod-chassi"
                                            name="chassi"
                                            maxLength={17}
                                            className="form-control"
                                            placeholder="00000000000000000"
                                            value={form.chassi}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor="prod-placa" className="form-label fw-bold small text-muted">PLACA</label>
                                        <input
                                            type="text"
                                            id="prod-placa"
                                            name="placa"
                                            maxLength={8}
                                            className="form-control"
                                            placeholder="ABC-1D23"
                                            value={form.placa}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-md-3">
                                        <label htmlFor="prod-ano" className="form-label fw-bold small text-muted">ANO</label>
                                        <input
                                            type="text"
                                            id="prod-ano"
                                            name="ano"
                                            maxLength={4}
                                            className="form-control"
                                            placeholder="2024"
                                            value={form.ano}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card bg-dark text-white border-0 shadow-sm p-3 rounded-3 d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
                        <div className="d-flex align-items-center gap-3">
                            <i className="bi bi-shield-check text-success fs-3"></i>
                            <div>
                                <div className="fw-bold">Validação de Segurança Integrada</div>
                                <div className="small text-white-50">Os dados salvos serão sincronizados com o estoque global da frota.</div>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-danger fw-bold px-4">Confirmar Cadastro</button>
                    </div>

                </form>
            </main>
        </>
    )
}

export default ProdutosCadastrados