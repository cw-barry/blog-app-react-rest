import React from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Input,
} from "reactstrap";
import { Layout } from "../components/";
import { AiOutlineSend } from "react-icons/ai";

const BlogCardDetails = () => {
  return (
    <Layout>
      <Card
        className="container d-flex flex-column justify-content-center align-items-center mt-3"
        style={{
          padding: "0",
        }}
      >
        <CardImg
          src="https://images.pexels.com/photos/9818084/pexels-photo-9818084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="post_image"
          style={{
            height: "20rem",
            objectFit: "cover",
          }}
          width="100%"
        />
        <div
          style={{
            width: "100%",
          }}
        >
          <CardBody
            style={{
              width: "100%",
            }}
          >
            <CardTitle tag="h3" className="text-center">
              Blog Title
            </CardTitle>
            <div className="d-flex justify-content-between">
              <CardSubtitle className="text-muted">
                Author: Mustafa Başar
              </CardSubtitle>
              <CardSubtitle className="text-muted">17 Kasım 2022</CardSubtitle>
            </div>
            <CardText className="mt-4">
              HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO
              WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD
              HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO
              WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD
              HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO
              WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD
              HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD
            </CardText>
          </CardBody>
        </div>
      </Card>
      {/* Comment Section */}
      <div className="container mt-3">
        <p className="fs-4 text-center">Comments</p>
        <div className="mt-2">
          <p className="fw-bold d-flex align-items-center">
            Mustafa Başar :<span className="fw-normal m-1">Hello world</span>
          </p>
        </div>
        <div className="d-flex align-items-center gap-2">
          <Input placeholder="Yorum yap" />
          <AiOutlineSend className="fs-2" />
        </div>
      </div>
    </Layout>
  );
};

export default BlogCardDetails;
