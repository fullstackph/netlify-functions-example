exports.handler = async (event, context) => {
  // return {
  //   statusCode: 200,
  //   body: "Hello, World"
  // };
  const token = event.queryStringParameters.token || "World";
  return {
    body: token
  }
};
