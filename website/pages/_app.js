import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="w-full p-10 min-h-screen">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
