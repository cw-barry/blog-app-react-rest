import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const { registerUser } = useContext(AppContext);
  const [formData, setFormData] = useState({
    email: 'barry2@gmail.com ',
    password: 'qazqwe123',
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser({ ...formData, password2: formData.password }, navigate);
  };
  return (
    <div className="d-flex col-12">
      <img
        src="https://images.pexels.com/photos/14186492/pexels-photo-14186492.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="login_page_image"
        className="col-8 d-none d-md-block"
        style={{ height: '100vh' }}
      />

      <Form
        onSubmit={handleSubmit}
        className="col-12 col-md-4 d-flex justify-content-center flex-column align-items-center"
        style={{ height: '100vh' }}
      >
        <p className="fs-2">Register Page</p>
        <FormGroup style={{ width: '18rem' }}>
          <Label for="email">Enter Your Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup style={{ width: '18rem' }}>
          <Label for="password">Enter Your Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
          />
        </FormGroup>
        <Button color="secondary" style={{ width: '18rem' }}>
          Register
        </Button>
        <p className="my-3">Or</p>
        <Button color="primary" style={{ width: '18rem' }}>
          Sign In With Google
        </Button>
        <p className="mt-4">
          Do have an account?
          <Link to="/auth/login">
            <span className="text-primary m-1 text-decoration-underline">
              Log in
            </span>
          </Link>
        </p>
      </Form>
    </div>
  );
};

export default Register;
