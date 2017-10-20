const getStations = async () => {
  const { API_URL } = process.env;
  const data = await fetch(`${API_URL}/stations`);

  return data.json();
};

const getSingleStation = async (id) => {
  const { API_URL } = process.env;
  const data = await fetch(`${API_URL}/station/${id}`);

  return data.json();
};

export { getStations, getSingleStation };
