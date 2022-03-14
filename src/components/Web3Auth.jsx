import { useEffect } from "react";

import OpenloginReactNativeSdk, {
  LoginProvider,
  OpenloginNetwork,
} from "@web3auth/react-native-sdk";

function Web3Auth() {

  useEffect(() => {
    OpenloginReactNativeSdk.init({
      // Your clientId obtained from OpenLogin dashboard.
      clientId:
        'BKJ3HmEqVmMHbFeW6E-CVPmdnVrnPhdBEI82kxgBVJGtaS4XlylvAE-1gmsv_Fa1CDj-xIhvTf3Kgd6mTn8nJtw',
      // TESTNET is currently broken on iOS.
      network: OpenloginNetwork.MAINNET,
      // redirectUrl only applies for Android SDK, it is designated by iOS SDK in iOS, which is \(bundleId)://auth
      redirectUrl: 'com.example.openloginreactnativesdk://auth',
    })
      .then(result => console.log(`success: ${result}`))
      .catch(err => console.log(`error: ${err}`));
  }, []);

  OpenloginReactNativeSdk.login({
    provider: LoginProvider.GOOGLE,
  })
    .then(result => console.log(`success: ${result.privKey}, ${result.userInfo}`))
    .catch(err => console.log(`error: ${err}`))

  // For iOS, it is also possible to get the default OpenLogin login screen, which let users to choose their own providers, by not specifying a provider.
  // For Android, not specifying a provider will default to Google.
  OpenloginReactNativeSdk.login({})
    .then(result => console.log(`success: ${result.privKey}, ${result.userInfo}`))
    .catch(err => console.log(`error: ${err}`))
}

export default Web3Auth;