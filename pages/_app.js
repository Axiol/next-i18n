import App from 'next/app';
import Router from 'next/router';
import NProgress from 'nprogress';
import appWithTranslation from '../i18n';

import Page from '../components/Page';

Router.onRouteChangeStart = () => {
  NProgress.start();
}

Router.onRouteChangeComplete = () => {
  NProgress.done();
}

Router.onRouteChangeError = () => {
  NProgress.done();  
}

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Page>
        <Component {...pageProps} />
      </Page>
    );
  }
}

export default appWithTranslation(MyApp);