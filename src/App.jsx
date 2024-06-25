import { useEffect, useState } from 'react'
import { WeatherForm } from './WeatherForm'
import axios from 'axios';
import { Info } from './Info';
import { Error } from './Error';


function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const loadInfo=async (city='london') => {
    try {
      const response = await axios.get(
       `http://api.weatherapi.com/v1/current.json?key=28697ecaeced4c29895214255242006&q=${city}&aqi=no`
      );
      console.log(response.data)
      setData(response.data);
      setLoading(false);
      setError(false)
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };
  useEffect(() => {
    loadInfo();
  }, []);
  useEffect(() => {
    document.title=data?.location.name ?? "weather"
  }, [data]);
  const handleChangeCity=(city)=>{
    loadInfo(city)
  }
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
    <p>By: Jair De La Rosa</p>
    <WeatherForm onChangeCity={handleChangeCity}/>
    {error?<Error/>:<Info data={data}/>}
    
    </>
  )
}

export default App
