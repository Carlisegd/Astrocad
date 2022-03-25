import React from 'react';
import styled from 'styled-components';
import { FcAssistant } from "react-icons/fc";
import { TiLocation } from "react-icons/ti";
import{FcAddressBook} from "react-icons/fc";
import {FiInstagram} from "react-icons/fi";
import {FiTwitter} from "react-icons/fi";
import {FiFacebook} from "react-icons/fi";
import {RiSpotifyLine} from "react-icons/ri";


const Footer = styled.footer`
  display: flex;
  background-color: black;
  height: 100px;
  bottom: 0px;
  align-items: center;
  justify-content: space-between;
  padding-left: 1em;
  padding-right: 1em;
  
`;

const DadosAstrocad = styled.ul`
  display:flex;
  justify-content: center;
  flex-direction: column; 
  text-align: left;
  flex-wrap: nowrap;
  list-style-type: none;
    li{
    color: white;
    font-size: 15px;
    padding: 0.2em;
    }
    
`;

const RedesSociais = styled.ul`
  display:flex;
  justify-content: center;
  text-decoration: none;
  list-style-type: none;
  .li{
    text-decoration: none;
    

};
`

const Span = styled.span`
  color: white;
  font-size: 1.5rem;
  padding: 0.2em;
  transition: transform 0.5s;
  `

class AreaFooter extends React.Component {
  render() {
    return (
      <Footer>

        
          <DadosAstrocad>
            <li><TiLocation/> Enderço: Rua Moreira, 234 - Bairro: Moinhos Cidade: Delume/SP</li>
            <li></li>
            <li><FcAddressBook/> E-mail: ouvidoria@astrocad.com</li>
            <li><FcAssistant/> Ouvidoria: 0800 0000 0000</li>
          </DadosAstrocad>

          <RedesSociais>
            
            <li><a target="_blank" href="http://www.instagram.com"><Span><FiInstagram/></Span></a></li>
            <li><a target="_blank" href="https://twitter.com/"><Span><FiTwitter/></Span></a></li>
            <li><a target="_blank" href="http://facebook.com"><Span><FiFacebook/></Span></a></li>
            <li><a target="_blank" href="https://open.spotify.com/"><Span><RiSpotifyLine/></Span></a></li>
          </RedesSociais>
      </Footer>

    )
  }

}

export default AreaFooter;
