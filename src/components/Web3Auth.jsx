/*import OpenloginReactNativeSdk, {
    LoginProvider,
    OpenloginNetwork,
  } from 'openlogin-react-native-sdk';
  
  React.useEffect(() => {
    OpenloginReactNativeSdk.init({
      // Your clientId obtained from OpenLogin dashboard.
      clientId:
        'BMm0O6mVHxm2s75Ar1yz7WOBD21s2nP7idoBLFLChfFhOspoTSaCl4IDqExDoKfA5Q2w9AHqo_V1IiMuEDbG8JE',
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
    .catch(err => console.log(`error: ${err}`))*/
  