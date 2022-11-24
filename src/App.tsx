import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import FormPerfis from './components/FormPerfis'
import { StyledApp } from './StyledApp'
import { FaGithub } from "react-icons/fa";

export default function App() {


  return (
    <StyledApp>
      <h3> <FaGithub size={40} color={"black"}/>  LOCALIZADOR DE PERFIS
      </h3>
      <FormPerfis />
    </StyledApp>
  )
}


