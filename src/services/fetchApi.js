const BASE_API = 'https://economia.awesomeapi.com.br/json/all';

const fetchApi = async () => {
  const response = await fetch(BASE_API);
  const json = await response.json();
  return json;
};

export default fetchApi;
