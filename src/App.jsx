import { BrowserRouter, Routes, Route, Outlet, useLocation } from 'react-router-dom'

// IMPORTAÇÕES COMPONENTES
import Sidebar from './components/Sidebar'

// IMPORTAÇÕES PÁGINAS
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Inventario from './pages/Inventario'
import Movimentacoes from './pages/Movimentacoes'
import Fornecedores from './pages/Fornecedores'
import ProdutosCadastrados from './pages/ProdutosCadastrados'

// Layout das páginas internas (com Sidebar)
function Layout() {
  const location = useLocation()
  const mostrarBotao = location.pathname === '/inventario'

  return (
    <div className="d-flex min-vh-100">
      <Sidebar mostrarBotao={mostrarBotao}/>

      <div className="flex-grow-1">
        <Outlet />
      </div>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Rotas SEM sidebar */}
        <Route path='/login' element={<Login />} />

        {/* Rotas COM sidebar */}
        <Route element={<Layout />}>
          <Route path='/'element={<Dashboard />}                    />
          <Route path='/inventario' element={<Inventario />}        />
          <Route path='/movimentacoes' element={<Movimentacoes />}  />
          <Route path='/fornecedores' element={<Fornecedores />}    />
          <Route path='/produtos' element={<ProdutosCadastrados />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App