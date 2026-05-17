exports.handler = async (event) => {
  const decimal = event.queryStringParameters.decimal;

  if (!decimal) {
    return {
      statusCode: 200,
      body: "Masukkan angka!"
    };
  }

  const binary = parseInt(decimal).toString(2);

  return {
    statusCode: 200,
    body: `Hasil: ${binary}`
  };
};