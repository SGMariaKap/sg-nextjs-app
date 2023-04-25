import React, { useEffect, useState } from 'react';
import { fetchData } from './api';
import Controls from './Controls';

const Header = ({children}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const fetchedData = await fetchData();
      //we have to parse the JSON data because it arrives as a string:
      try {
        const parsedData = JSON.parse(fetchedData);
        console.log("parsedData = ", parsedData, "parsedData.Control[0].Control[0] = ", parsedData.Control[0].Control[0].Id);
        const myArr = Object.entries(parsedData.Control[0]);
        setData(parsedData);

      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

return (
    <div>
      <Controls controls={data.Control} />
    </div>
  );
};

export default Header;