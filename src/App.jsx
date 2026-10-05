import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'

// IMPORTAÇÕES COMPONENTES
import Sidebar from './components/Sidebar'

// IMPORTAÇÕES PÁGINAS
import Dashboard from './pages/Dashboard'
import Inventario from './pages/Inventario'
import Movimentacoes from './pages/Movimentacoes'
// import Fornecedores from './pages/Fornecedores'
// import ProdutosCadastrados from './pages/ProdutosCadastrados'

function Layout() {
  const location = useLocation()
  const mostrarBotao = location.pathname === '/inventario'

  return (
    <div className="d-flex min-vh-100">
      <Sidebar mostrarBotao={mostrarBotao}/>

      <div className="flex-grow-1">
        <Routes>

          <Route path='/'element={<Dashboard />}                    />
          <Route path='/inventario' element={<Inventario />}        />
          <Route path='/movimentacoes' element={<Movimentacoes />}  />
          {/* <Route path='/fornecedores' element={<Fornecedores />}    /> */}
          {/* <Route path='/produtos' element={<ProdutosCadastrados />} /> */}

        </Routes>
      </div>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}

export default App