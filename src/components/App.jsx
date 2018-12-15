import React from 'react';
import {
  App,
  Panel,
  View,
  Statusbar,
  Popup,
  Page,
  Navbar,
  NavRight,
  Link,
  Block,
  LoginScreen,
  LoginScreenTitle,
  List,
  ListItem,
  Label,
  Input,
  ListButton,
  BlockFooter
} from 'framework7-react';

import routes from '../routes';

export default function (props) {

  // Framework7 parameters here
  const f7params = {
    id: 'com.mobile.cek.pertamina', // App bundle ID
    name: 'Pertamina Mobile', // App name
    theme: 'auto', // Automatic theme detection
    // App routes
    routes,
  };

  return (
    <App params={f7params}>
      {/* Main View */}
      <View id="main-view" url="/" main  className="ios-edges" />
    </App>
  );
};
