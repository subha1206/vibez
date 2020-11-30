import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="w-full px-4 sm:px-8 lg:px-16">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
