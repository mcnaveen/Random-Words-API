export const setDefaultHeaders = (response) => {
  response.header("Access-Control-Allow-Origin", "*");
  response.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');
  response.header("Access-Control-Allow-Methods", "GET");
  response.header("X-Frame-Options", "DENY");
  response.header("X-XSS-Protection", "1; mode=block");
  response.header("X-Content-Type-Options", "nosniff");
  response.header("Strict-Transport-Security", "max-age=63072000");
  response.setHeader("Content-Type", "application/json");
}
