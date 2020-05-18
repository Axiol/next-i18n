import App from 'next/app';
import Router from 'next/router';
import NProgress from 'nprogress';

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
    const { Component } = this.props;

    return (
      <Page>
        <Component />
      </Page>
    );
  }
}

export default MyApp;