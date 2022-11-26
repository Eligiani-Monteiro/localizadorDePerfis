
import { useState } from "react";
import { Form, Row, Button } from "react-bootstrap";
import styled from "styled-components";
import { getPerfil } from "../api/perfis";
import { CardPerfil } from "./CardPerfil";
import { FadeLoader } from 'react-spinners'

import { StyledCotain, StyledForm } from './StyledForm';


export default function FormPerfis() {
  const [perfilName, setPerfilName] = useState("")
  const [data, setData] = useState({})
  const [invalido, setInvalido] = useState(false);
  const [isLoading, setIsLoadng] = useState(false)


  async function pegar() {
    setIsLoadng(true)
    if (perfilName) {
      const data = await getPerfil(perfilName);
      setIsLoadng(false)

      if (data)
        setData(data);

      else
        setData({});
      setInvalido(true)
    }
    else {
      setData({});
    }

  }


  return (

    <StyledCotain>
      <StyledForm>
        {invalido ? "Usuario não encontrado" : ""}
        <Form>
          <Form.Group className="mb-3" controlId="">
            <Form.Control type="text" onChange={(a) => setPerfilName(a.target.value)} />
            <Form.Text className="text-muted">

            </Form.Text>
          </Form.Group>

          <Button onClick={pegar}>
            Buscar
          </Button>
        </Form>

      </StyledForm>
      {isLoading ? <FadeLoader color="#36d7b7"/> : <CardPerfil nome={data} />}
     

      
    </StyledCotain>

  )

}

