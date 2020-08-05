// import App from 'next/app'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <style jsx global>{`
                  @font-face {
                      font-family: 'Cabin';
                      src: url('/fonts/Cabin-Medium.ttf') format('truetype');
                      font-weight: 500;
                      font-style: normal;
                      font-display: swap;
                  }
                  
                  @font-face {
                      font-family: 'Cabin';
                      src: url('/fonts/Cabin-SemiBold.ttf') format('truetype');
                      font-weight: 600;
                      font-style: normal;
                      font-display: swap;
                  }
                  
                  @font-face {
                      font-family: 'Cabin';
                      src: url('/fonts/Cabin-MediumItalic.ttf') format('truetype');
                      font-weight: 500;
                      font-style: italic;
                      font-display: swap;
                  }
                  
                  @font-face {
                      font-family: 'Cabin';
                      src: url('/fonts/Cabin-BoldItalic.ttf') format('truetype');
                      font-weight: bold;
                      font-style: italic;
                      font-display: swap;
                  }
                  
                  @font-face {
                      font-family: 'Cabin';
                      src: url('/fonts/Cabin-Regular.ttf') format('truetype');
                      font-weight: normal;
                      font-style: normal;
                      font-display: swap;
                  }
                  
                  @font-face {
                      font-family: 'Cabin';
                      src: url('/fonts/Cabin-SemiBoldItalic.ttf') format('truetype');
                      font-weight: 600;
                      font-style: italic;
                      font-display: swap;
                  }
                  
                  @font-face {
                      font-family: 'Cabin';
                      src: url('/fonts/Cabin-Bold.ttf') format('truetype');
                      font-weight: bold;
                      font-style: normal;
                      font-display: swap;
                  }
                  
                  @font-face {
                      font-family: 'Cabin';
                      src: url('/fonts/Cabin-Italic.ttf') format('truetype');
                      font-weight: normal;
                      font-style: italic;
                      font-display: swap;
                  }
                  
                  body {
                    font-family: 'Cabin';
                    margin: 0;
                  }
                  body div {
                    display: flex;
                    flex: 1;
                    align-items: flex-start;
                  }
         
                  html,
                  body {
                    padding: 0;
                    margin: 0;
                  }                  
                  * {
                    box-sizing: border-box;
                  }
                `}</style>
    </div>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp