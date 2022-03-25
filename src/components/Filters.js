import React from "react"
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  border: none;
  font-weight: bold;
  text-align: center;
`

const Select = styled.select`
  border: none;
  
`


class Filtros extends React.Component {

    render() {
  
      return (
        <Div>
            <p>Ordenar </p>
            <Select
                name="ordenacao"
                value={this.props.ordenacao}
                onChange={this.props.onChangeOrdenacao}
            >
                <option value={-1}>Menor valor</option>
                <option value={1}>Maior valor</option>
                <option value={0}>Nenhum</option>
            </Select>
        </Div>
      );
    }
  }
  
  export default Filtros;