import logo from "../../assets/logo.png";
import topo from '../../assets/topo.png'

import tomate from '../../assets/frutas/Tomate.png';
import brocolis from '../../assets/frutas/Brócolis.png';
import batata from '../../assets/frutas/Batata.png';
import pepino from '../../assets/frutas/Pepino.png';
import abobora from '../../assets/frutas/Abóbora.png';

const cesta = {
    topo: {
        titulo: 'Detalhes da Cesta',
        images: {
            logoBanner: topo
        }
    },
    detalhes: {
        nome: 'Cesta de verduras',
        nomeFazenda: 'Jenny Jack Farm',
        descricao: 'Uma cesta com produtos selecionados cuidadosamente da fazenda direto para a sua cozinha',
        preco: 'R$ 40,00',
        botao: "Comprar",
        images: {
            logoFazenda: logo,
        }
    },
    itens: {
        titulo: "Itens da cesta",
        lista: [
            {
                nome: "Tomate",
                imagem: tomate,
            },
            {
                nome: "Brócolis",
                imagem: brocolis,
            },
            {
                nome: "Batata",
                imagem: batata,
            },
            {
                nome: "Pepino",
                imagem: pepino,
            },
            {
                nome: "Abóbora",
                imagem: abobora,
            }
        ]
    }
}

export default cesta

