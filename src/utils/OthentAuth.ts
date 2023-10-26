import * as AuthSession from 'expo-auth-session';
import jwt_decode from 'jwt-decode'
import * as WebBrowser from 'expo-web-browser';


WebBrowser.maybeCompleteAuthSession(); // for web


const logIn = async () => {
  try {
    const discovery = await AuthSession.fetchDiscoveryAsync(`https://auth.othent.io`);

    const redirectUri = AuthSession.makeRedirectUri();
    const authRequest = new AuthSession.AuthRequest({
      clientId: 'TPcAfB1upnH7ldNwdXbe138K5TDU1j7D',
      redirectUri: redirectUri,
      responseType: 'token id_token',
      scopes: ['openid', 'profile', 'email'],
      extraParams: {
        nonce: '1234',
        transaction_input: JSON.stringify({
            othentFunction: "idToken"
        }),
        }
    });

    await authRequest.makeAuthUrlAsync(discovery);

    const result = await authRequest.promptAsync(discovery);

    if (result.type === 'success') {
        if (result.authentication && result.authentication.idToken) {
          const userDetails = jwt_decode(result.authentication.idToken)
          return {
            success: true,
            userDetails,
          };
        } else {
          return {
            success: false,
            error: 'ID Token is missing',
          };
        }
      } else {
        return {
          success: false,
          error: result,
        };
      }      
  } catch (error) {
    return {
      success: false,
      error: error,
    };
  }
};

const logOut = async () => {
  try {
    AuthSession.dismiss();
    return {
      success: true,
    };
  } catch (error) {
    return {
      success: false,
      error: error,
    };
  }
};

export { logIn, logOut };