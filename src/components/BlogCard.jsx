import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
import { BiLike, BiCommentDots } from "react-icons/bi";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <Card>
      <CardImg
        alt="Card image cap"
        src="https://picsum.photos/318/180"
        top
        width="100%"
      />
      <CardBody>
        <CardTitle tag="h5">Card title</CardTitle>
        <div className="d-flex justify-content-between">
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Author: Mustafa Basar
          </CardSubtitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            17 Kasım 2022
          </CardSubtitle>
        </div>
        <CardText>
          This card has supporting text below as a natural lead-in to additional
          content.
        </CardText>
        <div className="d-flex justify-content-between align-items-center">
          <Link to="/post/details">
            <Button>See More</Button>
          </Link>
          <div className="d-flex gap-2">
            <span className="d-flex align-items-center justify-content-center">
              2
              <BiLike className="fs-4" />
            </span>
            <span>
              2
              <BiCommentDots className="fs-4" />
            </span>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default BlogCard;
