export class Solicitation {
    numeroNotaFiscal: string;
    serieNotaFiscal: string;
    dataSaidaConcessionaria: string;
    corsus: string;
    atributoControle: string;
    codigoEmpresa: string;
    segurado: {
        nome: string;
        tipoPessoa: string;
        numeroCgcOuCpf: string;
        ordemCgc: string;
        digitoCgcOuCpf: string
    }
    veiculo: {
        codigoDigitoModelo: string;
        nome: string;
        anoModelo: string;
        quantidadePortas: string;
        chassi: string;
        codigoCombustivel: string
    }

}