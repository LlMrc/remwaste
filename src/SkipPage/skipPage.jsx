
import Card from '../components/Card/card'
import React, { useState, useEffect } from 'react'

import Title from '../components/Title/title'
import './style.css'

function SkipPage() {

  const [skipData, setSkipData] = useState([]);
  const [loading, setLoading] = useState(true);
 

  useEffect(() => {
    const fetchSkips = async () => {
      try {
        const response = await fetch(
          'https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft'
        );
        const data = await response.json();
        setSkipData(data);
      } catch (error) {
        console.error('Error fetching skip data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSkips();
  }, []);

  if (loading) return <p style={{ textAlign: 'center' }}>Loading skips...</p>;

  return (
    <div>
     <Title/>
      <div className="card-wrapper">
      {skipData.map((skip) => (
        <Card key={skip.id} data={skip} />
      ))}
    </div>  
       </div>
  )
}

export default SkipPage