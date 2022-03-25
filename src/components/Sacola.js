import React from 'react';
import Styled from 'styled-components';

const ContainerSacola = Styled.section`
  display: flex;
  grid-template-columns: 1fr 1fr 1fr;
`
const InfoGeralSacola = Styled.section`
border: 1px solid black;
width: 300px;
padding: 10px;

`

const ListaProdutos = Styled.section`
display: grid;
gap: 10px;
text-align: left;
`

const CadaProduto = Styled.section`
display: grid;
grid-auto-flow: column;
align-items: center;
justify-content: space-between;


.QuantidadeNomeProdutos{
  margin: 0;
  font-style: bold;
}
.BotaoRemover{
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
}
`

const Texto = Styled.p`
font-weight: bold;
`

export class Sacola extends React.Component {

    /**
     * A lista de produtos dentro da sacola `produtosDentroDaSacola`
     * não precisa ser definida no state do componente, pois já está vindo 
     * para o componente através dos `props` 
     */
    constructor(props) {
        super(props);
    }

    valorTotal = () => {
        let total = 0;
        for (let item of this.props.produtosDentroDaSacola) {
            total = total + item.valor * item.quantidade
        }
        return total.toFixed(2)
    }

    

    render() {
        return (
            <ContainerSacola>
                <InfoGeralSacola>
                    <Texto>Total:</Texto>
                    <p>R$ {this.valorTotal()}</p>
                    <ListaProdutos>
                        {this.props.produtosDentroDaSacola.map((produto, index) => {
                            return <CadaProduto key={'produto-chave-'+index}>
                                <p className='QuantidadeNomeProdutos'>{produto.quantidade} {produto.nome}</p>
                                <button 
                                    className='BotaoRemover' 
                                    onClick={() => this.props.removeProdutoDaSacola(produto.id)}
                                >
                                    Remover
                                </button>
                            </CadaProduto>
                        })}
                    </ListaProdutos>
                </InfoGeralSacola>
            </ContainerSacola>
        )
    }
}