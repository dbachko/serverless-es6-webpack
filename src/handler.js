export const hello = (event, context, callback) => {
  const message = 'Go Serverless! Your function executed successfully!';
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      input: event,
      message,
    }),
  };

  callback(null, response);
};

export default {
  hello,
};
