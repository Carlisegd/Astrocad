import React from "react";
import './App.css';
import styled from "styled-components";

import Produto from "./components/Produtos";
import Filters from "./components/Filters";

import Header from "./components/Header";
import FotoCapaPraia from './imagens/FotoCapaPraia.png';
import AreaFooter from './components/AreaFooter';
import { Sacola } from './components/Sacola';
import Filtro from './components/Filtro';
import Anima from './components/Anima';
import Etiqueta from './components/Etiqueta';
import { FcInTransit } from "react-icons/fc";
import FotoSkate from './imagens/FotoSkate.png'
import FotoModelosCapa from './imagens/FotoModelosCapa.png';
import FotoModelos from './imagens/FotoModelos.png';

//Array fora da função para melhor organização
const listaDeProdutos = [
  {
    id: 1,
    nome: "Camiseta branca estampada",
    valor: 59.95,
    foto: "https://i.pinimg.com/236x/65/e6/98/65e698a4aea4dcf8afba471970c86c8b.jpg",
    quantidade: 1
  },
  {
    id: 2,
    nome: "Camiseta cinza Planeta",
    valor: 69.99,
    foto: "https://i.pinimg.com/236x/6e/b0/db/6eb0dbaf292cb4873e52035b45bdf333.jpg",
    quantidade: 1
  },
  {
    id: 3,
    nome: "Camiseta preta Fases da Lua",
    valor: 69.99,
    foto: "https://i.pinimg.com/736x/5d/b1/fe/5db1fed006a75d0260a988307b21c2cb.jpg",
    quantidade: 1
  },
  {
    id: 4,
    nome: "Camiseta preta Astronautinhas",
    valor: 59.99,
    foto: "https://img.ltwebstatic.com/images3_pi/2020/11/09/16048789577e0abd8329299afeedbdcc0697e7d4b6_thumbnail_600x.webp",
    quantidade: 1
  },
  {
    id: 5,
    nome: "Camiseta preta Planetas",
    valor: 89.99,
    foto: "https://i.pinimg.com/236x/10/54/8c/10548c2dd04434907e7ce74450be9b70.jpg",
    quantidade: 1
  },
  {
    id: 6,
    nome: "Camiseta azul Astronauta",
    valor: 95.99,
    foto: "https://img.ltwebstatic.com/images3_pi/2021/04/25/16193208009c822eb33b3f89767be5a3cc01026422_thumbnail_600x.webp",
    quantidade: 1
  },
  {
    id: 7,
    nome: "Camiseta black Fibonacci",
    valor: 99.99,
    foto: "https://i.pinimg.com/236x/a2/49/3f/a2493f313437fec59fd0da305b119342.jpg",
    quantidade: 1
  },
  {
    id: 8,
    nome: "Camisa roxa plantas",
    valor: 89.99,
    foto: "https://i.pinimg.com/236x/db/34/7b/db347b59748d25d0c105d0a536712f26.jpg",
    quantidade: 1
  },
];

//      Estilização CSS 
const InfoProdutos = styled.div`
    display: flex;
    justify-items: center;
    grid-template-columns: repeat(2, 1fr);
    justify-content: space-around;
    padding: 2em;
`

const ProdutosContainer = styled.div`
    display: grid;
    position: relative;
    margin-top: 2em;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
`



const Botao = styled.button ` 
  
    
    position: absolute;
    left: 75%;
    bottom: 15%;
    border-radius: 0.8em;
    background-color: #c83e3b;
    color: white;
    transition: 0.2s ease;
    align-self: center;
    padding: 0.5em;
    font-size: 2em;
    cursor: pointer;
    font-weight: bold;
    transition: transform 0.5s;
        :hover{
        background-color: #ff1616;
        transform: scale(1.3);
      }
      :active{
        background-color: #c83e3b;
      }
`

const Quantidade = styled.p`
  
  font-weight: bold;
  
`

const Details =styled.details`
  position: relative;
  
  
  `
const DivProm = styled.div`
  position: absolute;
  left:35%;
  bottom: 35%;
`
const EtiquetaPromo = styled.div`
  position: absolute;
  left:38%;
  top: 218%;
`
const EtiquetaPromo2 = styled.div`
  position: absolute;
  left:63%;
  top: 218%;
`

const IMG = styled.img`
  width: 100%;

`

const Frete = styled.div`
  color: #00FA9A;
  background-color: black;
  font-size: 1em;
  padding: 0.5em;
  
`
const TextoFrete = styled.p`
  
  animation-duration: 25s;
  animation-name: slidein;
  animation-iteration-count: infinite;
  @keyframes slidein {
  from {
    margin-left: 0%;
    width: 20%
  }

  to {
    margin-left: 80%;
    width: 20%;
  }
}
`






const ContainerSlides = styled.div`
display: flex;

`

const Slideshow = styled.img`
    width: 98%;
    margin-top: 0.5%;

`
  



const ListaFotos = styled.li`
  list-style-type: none;
  position: relative;
  width: 100%;
  margin-bottom: 50px;

`
const ContainerLista = styled.ul`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  list-style-type: none;
  position: relative;


`




//Main function
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      produtos: listaDeProdutos,
      ordenacao: -1,
      produtosDentroDaSacola: [],
      precoMin: '',
      precoMax: '',
      buscaNome: ''
    };
  }

  //Minor functions

  onChangeOrdenacao = (event) => {
    this.setState({ ordenacao: event.target.value });
  }

  onChangePrecoMax = (event) => {
    this.setState({ precoMax: event.target.value })
  };

  onChangePrecoMin = (event) => {
    this.setState({ precoMin: event.target.value })
  };

  onChangeBuscaNome = (event) => {
    this.setState({ buscaNome: event.target.value })
  };

  adicionaProdutoNaSacola = novoProdutoParaAdicionar => {
    this.setState(state => {
      const newState = JSON.parse(JSON.stringify(state));
      const posicaoDoProdutoDentroDaSacola = newState.produtosDentroDaSacola.findIndex(produtoNaSacola => {
        return produtoNaSacola.id === novoProdutoParaAdicionar.id
      });
      if (posicaoDoProdutoDentroDaSacola !== -1) {
        newState.produtosDentroDaSacola[posicaoDoProdutoDentroDaSacola].quantidade++;
      }
      else {
        newState.produtosDentroDaSacola.push(novoProdutoParaAdicionar);
      }
      return newState;
    });
  }

  removeProdutoDaSacola = idDoProdutoParaRemover => {
    this.setState(state => {
      const newState = JSON.parse(JSON.stringify(state));
      const posicaoDoProdutoDentroDaSacola = newState.produtosDentroDaSacola.findIndex(produtoNaSacola => {
        return produtoNaSacola.id === idDoProdutoParaRemover
      });
      if (posicaoDoProdutoDentroDaSacola !== -1) {
        newState.produtosDentroDaSacola.splice(posicaoDoProdutoDentroDaSacola, 1);
      }
      return newState;
    })
  }

  render() {
    const filtroUsuario = this.state.produtos.filter((produto) => {
      return produto.nome.toLowerCase().includes(this.state.buscaNome.toLowerCase())
    })
      .filter((produto) => {
        return this.state.precoMin === "" || produto.valor >= this.state.precoMin
      })
      .filter((produto) => {
        return this.state.precoMax === "" || produto.valor <= this.state.precoMax
      })
      .sort((prod, proxProd) => {
        if (prod.valor < proxProd.valor) {
          return 1 * this.state.ordenacao
        }
        else {
          return -1 * this.state.ordenacao
        }
      })
      .map((p) => {
        return (
          <Produto
            key={'chave-produto-' + p.id}
            adicionaProdutoNaSacola={this.adicionaProdutoNaSacola}
            produto={p}
          />
        )
      })

    return (
     
       <div>
       
        < Header
          buscaNome={this.state.buscaNome}
          onChangeBuscaNome={this.onChangeBuscaNome}
        />

        <div>
            <div>
              <IMG className="fotoCapa" src={FotoCapaPraia}  />
            </div>
            <div>
              <Botao>Aproveite Agora</Botao>
            </div>
            <DivProm>
              <Anima/>
            </DivProm>
            <Frete><TextoFrete> <FcInTransit/> Frete grátis acima de R$130 </TextoFrete></Frete>
        </div>
        <div>
              
                  <InfoProdutos>
                  
                        <Filtro
                          precoMin={this.state.precoMin}
                          precoMax={this.state.precoMax}
                          onChangePrecoMin={this.onChangePrecoMin}
                          onChangePrecoMax={this.onChangePrecoMax}                
                        />
                        <Quantidade>Quantidade: {filtroUsuario.length}</Quantidade>
                        <Details>
                          <summary>Sacola </summary>
                        <Sacola 
                            produtosDentroDaSacola={this.state.produtosDentroDaSacola}
                            removeProdutoDaSacola={this.removeProdutoDaSacola}
                          
                          />
                        </Details>
                        <Filters
                        ordenacao={this.state.ordenacao}
                        onChangeOrdenacao={this.onChangeOrdenacao}
                        />
                  </InfoProdutos>
                        </div>
                        <ProdutosContainer>
                          {filtroUsuario}
                        </ProdutosContainer>
                        <EtiquetaPromo><Etiqueta/> </EtiquetaPromo>
                        <EtiquetaPromo2><Etiqueta/> </EtiquetaPromo2>
                
                
                
                    <ContainerSlides>
                        <ContainerLista>
                          <ListaFotos><Slideshow  src={FotoSkate}  /></ListaFotos>
                          <ListaFotos> <Slideshow  src={FotoModelosCapa} /></ListaFotos> 
                          <ListaFotos>< Slideshow src={FotoModelos}  /></ListaFotos>
                        </ContainerLista>
                    </ContainerSlides>   
                  
                    
                
                
        
        <AreaFooter />

      </div>
     
    );
  }
}

export default App;
