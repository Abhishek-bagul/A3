import { useRouter } from 'next/router';
import useSWR from 'swr';
import ListingDetails from '@/components/ListingDetails';
import PageHeader from '@/components/PageHeader';
import { Error } from 'next/error';

export default function Listing() {
  const router = useRouter();
  const { id } = router.query; // Get the ID from the route

  // Fetch data using SWR
  const { data, error, isLoading } = useSWR(
    id ? `https://listings-api-lake.vercel.app/${id}` : null
  );

  if (isLoading) return null; // Show nothing while loading
  if (error || !data) return <Error statusCode={404} />; // Show 404 if there's an error or no data

  return (
    <>
      <PageHeader text={data.name} />
      <ListingDetails listing={data} />
    </>
  );
}
