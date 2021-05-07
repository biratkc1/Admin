import Page from '../components/Page';
import Head from 'next/head';


function MyApp({ Component, pageProps }) {
  
      return (
        <>
        <Head>
        </Head>
          <Page>
            <Component {...pageProps} />
          </Page>
        </>
      );
  }

export default MyApp;























// import App from 'next/app';
  // import { ApolloProvider } from '@apollo/react-hooks'
// import withData from '../library/withData';

// class MyApp extends App {
//       // async waits for Component.getInitialProps() to get called before completion
//   static async getInitialProps({ Component, ctx }) {
//     let pageProps = {};
//     if (Component.getInitialProps) {
//       pageProps = await Component.getInitialProps(ctx);
//     }
//     // this exposes the query to the user
//     pageProps.query = ctx.query;
//     return { pageProps };
//   }
//   render() {
//     const { Component, apollo, pageProps } = this.props;

//     return(
//         <ApolloProvider client={apollo}>
//           <Page>
//             <Component {...pageProps} />
//           </Page>
//         </ApolloProvider>
//     );
//   }
// }

// export default withData(MyApp);
