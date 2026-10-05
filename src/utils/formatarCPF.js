// Recebe o que foi digitado e devolve no formato 000.000.000-00
function formatarCPF(valor) {
    valor = valor.replace(/\D/g, '').substring(0, 11)

    if (valor.length > 9) {
        return valor.replace(/^(\d{3})(\d{3})(\d{3})(\d{1,2})$/, '$1.$2.$3-$4')
    }
    if (valor.length > 6) {
        return valor.replace(/^(\d{3})(\d{3})(\d{1,3})$/, '$1.$2.$3')
    }
    if (valor.length > 3) {
        return valor.replace(/^(\d{3})(\d{1,3})$/, '$1.$2')
    }
    return valor
}

export default formatarCPF