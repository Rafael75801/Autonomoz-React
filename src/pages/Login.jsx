import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import './Login.css'

const perfis = [
    { id: 'gerente', label: 'Gerente', icone: 'bi bi-person-gear'},
    { id: 'estoquista', label: 'Estoquista', icone: 'bi bi-archive'}
]

function Login() {
    const [aba, setAba] = useState('login')

}