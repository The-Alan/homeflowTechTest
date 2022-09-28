import { useState, useEffect } from 'react';
import Header from './Header';
import PropertyCard from './PropertyCard';

function App() {
  const [properties, setProperties] = useState();
  const [searchQuery, setSearchQuery] = useState("");

  // use this state to keep track of the user's saved/bookmarked properties
  const [savedProperties, setSavedProperties] = useState([]);

  useEffect(() => {
    const fetchPropertyData = async () => {
      const response = await fetch('/property-data.json');
      const json = await response.json();
      
      setProperties(json.result.properties.elements);
    };

    fetchPropertyData();
  }, []);

  function FilterSearchQuery(newSearchQuery) {
    setSearchQuery(newSearchQuery);
  }

  function HandleBookMarking(property) {
    if(savedProperties.includes(property)) {
      setSavedProperties(savedProperties.filter(item => item.property_id !== property.property_id));
    } else {
      setSavedProperties([...savedProperties, property]);
    }
  }

  return (
    <div className="container mx-auto my-5">
      <Header handleSearch={FilterSearchQuery}/>

      <div className="grid grid-cols-1 gap-4 mt-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {!!properties && properties
            .filter((val) => {
              if(searchQuery === ""){
                return val;
              } else if(val.short_description.toLowerCase().includes(searchQuery.toLowerCase())) {
                return val;
              }
            })
            .map((property) => <PropertyCard bookmark={HandleBookMarking} key={property.property_id} property={property} />)}
      </div>
    </div>
  );
}

export default App;