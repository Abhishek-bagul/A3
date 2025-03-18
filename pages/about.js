import Link from "next/link";
import Card from "react-bootstrap/Card";
import ListingDetails from "@/components/ListingDetails";
import PageHeader from "@/components/PageHeader";

export async function getStaticProps() {
  const listingId = "1001265"; // Replace with dynamic ID if needed
  console.log("Fetching listing with ID:", listingId); // Log the ID to check

  const response = await fetch(`https://listings-api-lake.vercel.app/api/listings/${listingId}`);
  const data = await response.json();

  // Log the response data for debugging purposes
  console.log("Fetched listing data:", data);

  return { props: { listing: data } };
}

export default function About({ listing }) {
  return (
    <>
      <PageHeader text="About the Developer - Abhishek Vijay Bagul" />
      <Card className="bg-light">
        <Card.Body>
        <div>
          <p>I am currently a student in the Computer Programming and Analysis program at Seneca College, where my deep passion for technology and programming continues to shape my academic journey. Over the years, I’ve had the opportunity to work in various industries, which has allowed me to develop a diverse skill set. However, I have decided to focus my career on becoming an expert in programming. Throughout my journey, I have embraced key values such as leadership, teamwork, integrity, and honesty, all of which have positively influenced my professional path. Independence has been a cornerstone of my life since childhood, and I take pride in being self-sufficient and driven. I am committed to my education and confident in the bright future that lies ahead in the tech industry.</p>
          <p>
            One of the places that I would like to visit is the:{" "}
            <Link href={`/listing/${listing._id}`} passHref legacyBehavior>
              <a>Bed & Breakfast (Airbnb)</a>
            </Link>
            .
          </p>
        </div>
        </Card.Body>
        <ListingDetails listing={listing} />
      </Card>
    </>
  );
}


