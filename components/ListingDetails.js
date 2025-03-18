import { Container, Row, Col, Card } from 'react-bootstrap';

export default function ListingDetails({ listing }) {
  console.log(listing); 
  const {
    price,
    room_type,
    bed_type,
    review_scores,
  } = listing;

  // Extracting rating, using optional chaining in case the field is missing
  const rating = review_scores?.review_scores_rating || 'N/A';

  return (
    <Container>
      <Row>
        {/* Left column for listing basic details */}
        <Col lg={6}>
          <Card>
            <Card.Body>
              <h3>{listing.name}</h3>
              <p><strong>Price:</strong> ${price ? price.toFixed(2) : 'N/A'}</p>
              <p><strong>Room Type:</strong> {room_type}</p>
              <p><strong>Bed Type:</strong> {bed_type}</p>
              <p><strong>Rating:</strong> {rating} / 100</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
