
import { ThemeContextProvider } from '@/context/ThemeContext';
import '@/styles/main.scss';
import type { AppProps } from 'next/app';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import useTheme from '@/hooks/useTheme';

export default function App({ Component, pageProps }: AppProps) {
  const toastheme = useTheme() === "light" ? "dark" : "light";
  return (
    <ThemeContextProvider>
      <Component {...pageProps} />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={toastheme}
      />
    </ThemeContextProvider>
  )
}
