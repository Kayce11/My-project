import React from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { BsArrowRight } from 'react-icons/bs'; // Correct icon import
import { Link } from 'react-router-dom';

import '../../App.css';

import day1Pic from '../pics/d1.jpg';
import day2Pic from '../pics/day2.jpg';
import day3Pic from '../pics/day3.jpg';
import day4Pic from '../pics/day4.jpg';
import day5Pic from '../pics/day5.jpg';
import day6Pic from '../pics/d6.jpg';
import day7Pic from '../pics/day7.jpg';

const posts = [
  { id: 1, title: 'Day 1 Tour: Luneta and Intramuros visit', img: day1Pic, date: 'April 7, 2025' },
  { id: 2, title: 'Day 2 Tour: Subic bay visit', img: day2Pic, date: 'April 8, 2025' },
  { id: 3, title: 'Day 3 Tour: Museum visit', img: day3Pic, date: 'April 9, 2025' },
  { id: 4, title: 'Day 4 Tour: Bangko Sentral and Hytech company visit', img: day4Pic, date: 'April 10, 2025' },
  { id: 5, title: 'Day 5 Tour: LRT and TEC visit', img: day5Pic, date: 'April 11, 2025' },
  { id: 6, title: 'Day 6 Tour: Baguio tour', img: day6Pic, date: 'April 12, 2025' },
  { id: 7, title: 'Day 7 Tour: Free Time', img: day7Pic, date: 'April 13, 2025' },
];

const Blog = () => {
  return (
    <div className="blog-section">
      <Container className="px-4">
        <Row className="g-4">
          {posts.map((post) => (
            <Col md={4} sm={6} xs={12} key={post.id}>
              <Link to={`/blog/${post.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Card className="border-0 shadow-sm h-100 d-flex flex-column justify-content-between">
                  <div>
                    <Card.Img
                      variant="top"
                      src={post.img}
                      style={{
                        height: '200px',
                        objectFit: 'cover',
                        borderTopLeftRadius: '1rem',
                        borderTopRightRadius: '1rem',
                      }}
                    />
                    <Card.Body className="d-flex flex-column">
                      <Badge
                        bg="light"
                        text="dark"
                        className="mb-2 align-self-start"
                        style={{ fontSize: '0.75rem' }}
                      >
                        Tour Activity
                      </Badge>
                      <Card.Title className="hover-title" style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>
                        {post.title}
                      </Card.Title>
                      <Card.Text className="text-muted" style={{ fontSize: '0.85rem' }}>
                        {post.date}
                      </Card.Text>
                    </Card.Body>
                  </div>
                  <div className="d-flex justify-content-end p-3 pt-0">
                    <Button variant="outline-primary" size="sm" className="rounded-circle">
                      <BsArrowRight />
                    </Button>
                  </div>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>

      <style jsx="true">{`
        .hover-title {
          transition: color 0.3s;
        }
        .hover-title:hover {
          color: #0d6efd;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default Blog;
