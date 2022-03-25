import React from "react";
import styled from "styled-components";



const ProdutoContainer = styled.div`
  width: 90%;
  margin-bottom: 50px;
  text-align: center;
  margin-top: 0;
`

const FotoProduto = styled.img`
  width: 90%;

`
const Div = styled.div`
position: relative;
background-color: transparent;
transition: transform 1s;
& div:nth-child(1):hover{
transform: scale(1.3);
}
`

const Preco = styled.p`
  color:green;
  font-size: 1.5em;
  font-weight: bold;
  margin: 0;
  text-align: center;

`

const NomeProduto = styled.p`
  color:black;
  font-size: 1em;
  text-align: center;
`

const Botao = styled.button `
    margin-top: 0.5em;
    border: 1px solid;
    border-radius: 0.8em;
    background-color: #00BFFF;
    color: white;
    transition: 0.2s ease;
    align-self: center;
    padding: 0.4rem;
    font-size: 0.8em;
    cursor: pointer;
    font-weight: bold;
    transition: transform 1s;
      :hover{
        background-color: #0000FF;
        transform: scale(1.3);
      }
      :active{
        background-color: #00BFFF;
      }  
`



class Produto extends React.Component {

  // nunca esquecer de inicalizar os props dentro do constructor
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <ProdutoContainer >
        <Div>
        
        <div><FotoProduto src={this.props.produto.foto} alt="Imagem do produto" /></div>
        </Div>
        <NomeProduto>{this.props.produto.nome}</NomeProduto>
        <Preco>R${this.props.produto.valor}</Preco>
        
        

        <Botao
          className='BotaoAdicionar' 
          onClick={() => this.props.adicionaProdutoNaSacola(this.props.produto)}
        >Adicionar à Sacola </Botao>
      
      </ProdutoContainer>
    );
  }
}

export default Produto;