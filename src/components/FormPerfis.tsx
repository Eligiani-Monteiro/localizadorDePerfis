
import { useState } from "react";
import { Form, Row, Button } from "react-bootstrap";
import styled from "styled-components";
import { getPerfil } from "../api/perfis";
import { CardPerfil } from "./CardPerfil";

import { StyledCotain, StyledForm } from './StyledForm';

export default function FormPerfis() {
  const [perfilName, setPerfilName] = useState("")
  const [data, setData] = useState({})

  async function pegar() {
    const dados = await getPerfil(perfilName)
    setData(dados)

  }


  return (

    <StyledCotain>
      <StyledForm>
        <Form>
          <Form.Group className="mb-3" controlId="">
            <Form.Control type="text"onChange={(a) =>setPerfilName(a.target.value)}/>
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>

          <Button onClick={pegar}>
            Buscar
          </Button>
        </Form>
      </StyledForm>
      {Object.keys(data).length !== null ? <CardPerfil nome={data}/> :null}
    </StyledCotain>

  )

}

