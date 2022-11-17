import React from "react";
import { Layout } from "../components/";
import {
  Button,
  Col,
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
  Row,
} from "reactstrap";
const UserProfile = () => {
  return (
    <Layout>
      <Form className="container mt-4">
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label>Email</Label>
              <Input placeholder="with a placeholder" type="email" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label>Password</Label>
              <Input placeholder="password placeholder" type="password" />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label sm={2}>Select Image</Label>
          <Input name="file" type="file" />
          <FormText>
            This is some placeholder block-level help text for the above input.
            It‘s a bit lighter and easily wraps to a new line.
          </FormText>
        </FormGroup>
        <FormGroup>
          <Label>About me</Label>
          <Input
            placeholder="Ex: I like reading books, playing computer games and coding."
            type="textarea"
            style={{
              resize: "none",
              height: "5rem",
            }}
          />
        </FormGroup>
        <FormGroup check>
          <Input id="exampleCheck" name="check" type="checkbox" />
          <Label check for="exampleCheck">
            Allow Changes
          </Label>
        </FormGroup>
        <Button style={{ width: "100%", marginTop: "2rem" }}>Submit</Button>
      </Form>
    </Layout>
  );
};

export default UserProfile;
