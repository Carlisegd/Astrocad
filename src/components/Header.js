import React from 'react';
import styled from 'styled-components'
import { MdOutlineShoppingBag } from "react-icons/md";
import { MdSearch } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";





const Header = styled.header`
  background-image: linear-gradient(to right, #00BFFF , #00FA9A, #0000FF, black);
  display:flex;
  justify-content: space-between;
  height: 4rem;
  align-items: center;
  padding: 0px 10px;
  color: white;
  position: fixed;
  width: 100%;
  z-index: 2;
    .campoBusca {
    border: none;
    padding: 5px 5px;
    outline: 0;
    }
`;

const Lupa = styled.span`
  color: #C0C0C0;
  font-size: 1.5em;
  position: relative;
  right: 4%;
  margin-top: 0.5%;
`
const Sacola = styled.span`
  color: white;
  font-size: 1.5rem;
  padding: 0.5rem;
  
`
const Coracao = styled.span`
  color: white;
  font-size: 1.5rem;
  padding: 2.0rem;
  `

const Pessoa = styled.span`
  color: white;
  font-size: 1.5rem;
  padding: 0.5rem;
`
const Ul = styled.ul`
  display:flex;
  margin: 5%;
  text-decoration: none;
  list-style-type: none;
  .li{
    text-decoration: none;
  }
`
const Button = styled.button`
    background-color: transparent;
    border:none;
    transition: 0.2s ease;
    align-self: center;
    cursor: pointer;
    transition: transform 0.5s;
        :hover{
        transform: scale(1.3);
}
`

const Input = styled.input`
    position: absolute;
    border: none;
    padding: 5px 5px;
    outline: 0;
    border-radius:5px;
    width: 200px;
    left: 80%;

`

function AreaHeader(props) {

  return (
    <div>
      <Header>
        <h3>Astrocad</h3>

        <Input type="text"
          value={props.buscaNome}
          onChange={props.onChangeBuscaNome}
          placeholder='Buscar produtos'
        />

        <Lupa><MdSearch /></Lupa>
       
        
      </Header>

    </div>


  )
}

export default AreaHeader;