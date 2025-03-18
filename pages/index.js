import { useState, useEffect } from 'react';
import useSWR from 'swr';
import { Accordion, Pagination } from 'react-bootstrap';
import ListingDetails from '@/components/ListingDetails';
import PageHeader from '@/components/PageHeader';

export default function Home() {
  // State values for page number and page data
  const [page, setPage] = useState(1);
  const [pageData, setPageData] = useState([]);

  // Fetch data using SWR (No need for fetcher, it's already globally configured)
  const { data, error } = useSWR(`https://listings-api-lake.vercel.app/api/listings?page=${page}&perPage=10`);

  // Update pageData state when data is fetched
  useEffect(() => {
    if (data) {
      setPageData(data);
    }
  }, [data]);

  // Functions for handling pagination
  const previous = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const next = () => {
    setPage(page + 1);
  };

  // Check for errors
  if (error) return <p>Error loading data...</p>;
  if (!data) return <p>Loading...</p>;

  return (
    <>
      <PageHeader text="Browse Listings : Sorted by Number of Ratings" />

      <Accordion>
        {pageData.map((listing) => (
          <Accordion.Item key={listing._id} eventKey={String(listing._id)}>
            <Accordion.Header>
              <strong>{listing.name}</strong> - {listing.address?.street}
            </Accordion.Header>
            <Accordion.Body>
              <ListingDetails listing={listing} />
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>

      <Pagination>
        <Pagination.Prev onClick={previous} />
        <Pagination.Item>{page}</Pagination.Item>
        <Pagination.Next onClick={next} />
      </Pagination>
    </>
  );
}
