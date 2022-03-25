import React from "react";
import '../App.css';
import ProdutosNaPromo from "./ProdutosNaPromo";
import Filters from "./Filters";
import styled from "styled-components";
import {Sacola} from './Sacola';


const listaDeProdutos =[
  {
    id: 9,
    nome: "Camiseta Nasa",
    promo: "99.99",
    valor: 49.45,
    foto: "https://i.pinimg.com/236x/a2/49/3f/a2493f313437fec59fd0da305b119342.jpg",
    quantidade: 0
  },
  {
    id: 10,
    nome: "Camisa Coração",
    promo: "89.99",
    valor: 44.90,
    foto: "https://i.pinimg.com/236x/db/34/7b/db347b59748d25d0c105d0a536712f26.jpg",
    quantidade: 0
  },
  {
    id: 11,
    nome: "Camiseta Nasa",
    promo: "99.99",
    valor: 49.45,
    foto: "https://i.pinimg.com/236x/a2/49/3f/a2493f313437fec59fd0da305b119342.jpg",
    quantidade: 0
  },
  {
    id: 12,
    nome: "Camisa Coração",
    promo: "89.99",
    valor: 44.45,
    foto: "https://i.pinimg.com/236x/db/34/7b/db347b59748d25d0c105d0a536712f26.jpg",
    quantidade: 0
  },
]
const ContainerProdutos = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.5em;
    padding-right: 1em;
    margin-left: 15em;
    text-align: center;
    border-radius: 20px;
   `
const InfocoesProdutos = styled.div`
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(2, 1fr);
    padding: 1em;
    text-align: center;
`

const Botao = styled.button `
    position: relative;
    left: 30em;
    bottom: 10em;
    border-radius: 0.8em;
    background-color: #c83e3b;
    color: white;
    transition: 0.2s ease;
    align-self: center;
    padding: 0.5em;
    font-size: 2em;
    cursor: pointer;
    font-weight: bold;
      :hover{
        background-color: #ff1616;
      }
      :active{
        background-color: #c83e3b;
      }
`

class ProdutosNaPromocao extends React.Component {

  /**
   * A definição do state dentro do componente deve ser sempre feita dentro do método
   * `constructor` da classe, usando sempre `this.state`
   * 
   * O método `constructor` de uma classe React sempre tem que receber um `props` e chamar
   * a função mágica `super(props)` para poder inicializar a classe corretamente, mesmo que o `props` 
   * não seja usado dentro da aplicação.
   */
  constructor(props) {
    super(props);
    this.state = {
      produtos: listaDeProdutos,
      ordenacao: -1,
      // vamos inicializar uma variável que representa os produtos adicionados na sacola
      produtosDentroDaSacola: []
    };
  }
  
  onChangeOrdenacao = (event) => {
    this.setState({ ordenacao: event.target.value });
  }

  // Esse método será chamado por cada card de produto
  adicionaProdutoNaSacola = novoProdutoParaAdicionar => {

    this.setState(state => {

      // clonamos o estado original para manter a imutabilidade
      const newState = JSON.parse(JSON.stringify(state));

      // procuramos dentro da sacola, se esse produto já está lá, usando uma função que vai retornar
      // qual é a posição do produto dentro da array da sacola, comparando os `ids`. 
      // Se o produto não existir dentro da sacola essa função vai retornar -1
      const posicaoDoProdutoDentroDaSacola = newState.produtosDentroDaSacola.findIndex(produtoNaSacola => {
        return produtoNaSacola.id === novoProdutoParaAdicionar.id
      });

      // se o produto possuir uma posicao diferente de -1 significa que o produto já existe dentro 
      // da sacola
      if(posicaoDoProdutoDentroDaSacola !== -1) {
        // o produto já existe dentro da sacola, portanto apenas incrementamos a quantidade desse 
        // produto dentro da sacola
        newState.produtosDentroDaSacola[posicaoDoProdutoDentroDaSacola].quantidade++;
      }
      // se o produto não está na sacola ainda, vamos adicionar ele na sacola
      else {
        newState.produtosDentroDaSacola.push(novoProdutoParaAdicionar);
      }

      // retorna o estado atualizado
      return newState;
    });
  }

  // Esse método vamos passar por `props` para o componente da sacola
  // pois é dentro dele que vamos chamar esse método
  removeProdutoDaSacola = idDoProdutoParaRemover => {

    this.setState(state => {

      // clonamos o estado original para manter a imutabilidade
      const newState = JSON.parse(JSON.stringify(state));

      // procuramos novamente pela posição do produto dentro da array de produtos da sacola
      // se encontramos esse id, vamos remover o produto, se não encontramos então não fazemos nada
      const posicaoDoProdutoDentroDaSacola = newState.produtosDentroDaSacola.findIndex(produtoNaSacola => {
        return produtoNaSacola.id === idDoProdutoParaRemover
      });

      // se não for -1, significa que o produto está dentro da sacola, então removemos
      if(posicaoDoProdutoDentroDaSacola !== -1) {
        // Método que remove um item de uma array
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
        newState.produtosDentroDaSacola.splice(posicaoDoProdutoDentroDaSacola, 1);
      }

      // retorna o estado atualizado
      return newState;
    })
  }

  render() {

    const listaProdutos = this.state.produtos.map((p) => {
      return (
        <ProdutosNaPromo 
          key={'chave-produto-'+p.id}
          adicionaProdutoNaSacola={this.adicionaProdutoNaSacola}
          produto={p}
        />
      )
    }).sort((prod, proxProd) => {
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
      if(prod.valor > proxProd.valor) {
        return 1 * this.state.ordenacao
      }
      else {
        return -1 * this.state.ordenacao
      }
    });
        
    return (
      <div>
        <InfocoesProdutos>
          <p>Quantidade de Produtos: {listaProdutos.length}</p>
          <Filters
            ordenacao={this.ordenacao}
            onChangeOrdenacao={this.onChangeOrdenacao}
          />
        </InfocoesProdutos>
        <ContainerProdutos>
          {listaProdutos}
        </ContainerProdutos>
        <Sacola 
          // passamos as variáveis do estado do componente pai na forma de `props`
          // para o componente filho
          produtosDentroDaSacola={this.state.produtosDentroDaSacola}
          removeProdutoDaSacola={this.removeProdutoDaSacola}
        />
      
      </div>
    );
  }
}

export default ProdutosNaPromocao;
