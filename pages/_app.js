import "@/styles/globals.css";
import PlausibleProvider from "next-plausible";
import Script from 'next/script';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script 
        defer
        data-domain="weeealth.com" 
        src="https://plausible.io/js/script.hash.outbound-links.js"
      />
      <Script>
        {`window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }`}
      </Script>
      <PlausibleProvider domain="weeealth.com">
        <Component {...pageProps} />
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </PlausibleProvider>
    </>
  );
}