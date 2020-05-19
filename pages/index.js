import React, { Component } from 'react';
import Link from 'next/link';

import { withTranslation } from '../i18n';

class Index extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.t('tagline')}</h1>
        <Link href="/test">
          <a>Qui voilà</a>
        </Link>
      </div>
    );
  }
}

export default withTranslation('common')(Index);