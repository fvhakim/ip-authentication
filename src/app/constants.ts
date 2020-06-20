export class Constants {
    public static oktaOrg = "https://fhakim.okta.com/";
    public static  client_id= "0oafz6davPT5Y0LyJ4x6";
    public static  redirect_uri= "http://localhost:8080";  // Make sure to add this URL in Okta as Trusted Origins ( Security > API > Trusted Orgins) otherwise you will get CORS error
    public static response_type= "token";
    public static  scope= "openid";

  }
