```javascript
import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetch('https://api.example.com/data');
      const jsonData = await response.json();
      setData(jsonData);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (!data) {
      return <Text>No data</Text>;
  }

  return (
    <View>
      <Text>{data.name}</Text>
    </View>
  );
};

export default MyComponent;
```