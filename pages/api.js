export const fetchData = async () => {
    try {
      const response = await fetch('https://stg-test-api.azurewebsites.net/api/OpenJson?fileName=staticheader');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  };