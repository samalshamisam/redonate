
// components/ServicesPreview.jsx
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

import './css/ServicesPreview.css';
const ServicesSection = () => {
  return (
    <section className="services-preview py-5">
      <Container>
        <h2 className="text-center mb-4">خدماتنا</h2>
        <Row>
          <Col md={4}>
            <Card className="service-card">
              <Card.Body>
                <h4>تسجيل الصوت</h4>
                <p>تقديم أفضل الخدمات لتسجيل الصوت بكفاءة عالية.</p>
                <Button variant="primary" href="/Services">اكتشف المزيد</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="service-card">
              <Card.Body>
                <h4>المونتاج</h4>
                <p>خدمة المونتاج المتكامل لتحسين جودة الصوت والمحتوى.</p>
                <Button variant="primary" href="/Services">اكتشف المزيد</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="service-card">
              <Card.Body>
                <h4>إنتاج الموسيقى</h4>
                <p>نحن نقدم خدمات الإنتاج الموسيقي للموسيقيين والمنتجين.</p>
                <Button variant="primary" href="/Services">اكتشف المزيد</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ServicesSection;
