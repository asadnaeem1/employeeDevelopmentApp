const SERVER_URL = "http://localhost:4000";

export const ROUTES = {
  SCRAP_ROUTE: `${SERVER_URL}/scrap`,
  DASHBOARD_ROUTE: `${SERVER_URL}/dashboard`
};

export const gitAuthLogin = () => {
  let url = new URL("https://github.com/login/oauth/authorize");
  url.search = new URLSearchParams({
    client_id: process.env.client_id,
    redirect_uri: "http://localhost:3000/dashboard",
    scope: "user",
    allow_signup: "false"
  });
  window.location.replace(url);
};

export const gitGetAuthToken = async code => {
  if (code) {
    let url = new URL("https://github.com/login/oauth/access_token");
    url.search = new URLSearchParams({
      client_id: process.env.client_id,
      code: code,
      client_secret: process.env.client_secret
    });
    const response = await fetch(url, {
      method: "POST",
      mode: "no-cors"
    });
  }
};
