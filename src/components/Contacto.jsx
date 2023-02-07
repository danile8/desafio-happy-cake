import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Contacto(){
    return (<div class="text-center p-5">
        <h2>Cuentanos, ¿en que te podemos ayudar?</h2>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicDescription">
        <Form.Label>Descripcion</Form.Label>
        <Form.Control type="text" placeholder="" />
      </Form.Group>
      <Button variant="danger" type="submit">
        Enviar
      </Button>
    </Form>
        </div>
    )
}
export default Contacto;