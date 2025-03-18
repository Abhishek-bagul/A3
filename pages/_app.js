import Layout from '@/components/Layout';
import { SWRConfig } from 'swr';

// SWR fetcher function to be used globally for data fetching
const fetcher = async (...args) => {
  const response = await fetch(...args);
  if (!response.ok) {
    throw new Error(`Request failed with status: ${response.status}`);
  }
  return response.json();
};

function MyApp({ Component, pageProps }) {
  return (
    // SWRConfig to make fetcher available globally
    <SWRConfig value={{ fetcher }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  );
}

export default MyApp;
