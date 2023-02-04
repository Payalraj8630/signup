import { Form, Row, Button, Container, FormControl, Col} from "react-bootstrap";
import Footer from "../CompoundComponents/Footer";
import Navbar from "../CompoundComponents/Navbar";


function Signup(){
   return(
  <div>
       <Navbar />
       <Container>
         <Row className="justify-content-center">
           <Col md="4">
             <h1 className="text-center text-muted">Signup</h1>
             <Form>
               <Form.Group className="mb-3" controlId="firstname">
                 <Form.Label> First Name</Form.Label>
                 <Form.Control
                   type="text"
                   name="firstName"
                   placeholder="john"
                   onChange={(e) => {
                     console.log(e.target.value);
                   } } />
               </Form.Group>
               <Form.Group className="mb-3" controlId="lastname">
                 <Form.Label> Last Name</Form.Label>
                 <FormControl
                   type="text"
                   name="lastName"
                   placeholder="doe"
                   onChange={(e) => {
                     console.log(e.target.value);
                   } } />
               </Form.Group>
               <Form.Group className="mb-3" controlId="email">
                 <Form.Label>email</Form.Label>
                 <Form.Control
                   type="email"
                   name="email"
                   placeholder="johndoe@gmail.com"
                   onChange={(e) => {
                     console.log(e.target.value);
                   } } />
               </Form.Group>
               <Form.Group className="mb-3" controlId="password">
                 <Form.Label>password</Form.Label>
                 <Form.Control
                   type="password"
                   name="password"
                   placeholder="***"
                   onChange={(e) => {
                     console.log(e.target.value);
                   } } />
               </Form.Group>
               <Button variant= "success" className="w-100">Signup</Button>
           </Form>
         </Col>
       </Row>
     </Container>
     <Footer/>
  </div>
   );
}
export default Signup;
