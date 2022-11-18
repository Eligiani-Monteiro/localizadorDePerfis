
import { Form, Row, Button} from "react-bootstrap";

import { Styled } from './styled';

export function FormPerfis(){
    <Styled>
    <Form>
        <Row>
            <h3>Lcalizador de Perfis</h3>
        </Row>
        <Form.Group className="mb-12" controlId="formBasicName">
            <Form.Label>Nome: </Form.Label>
            <Form.Control type="text" placeholder="Digite seu Nome" />
        </Form.Group>
        <Row>
            
            
        <Button variant="primary" type="submit">
           Buscar
        </Button>
    </Form>
</Styled>

}

