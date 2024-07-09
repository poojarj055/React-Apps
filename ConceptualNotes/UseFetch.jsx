// The useFetch React hook is useful for handling data fetching and state management in React components. 
// It allows you to easily fetch data from a specified URL using the fetch API and provides a consistent pattern 
// for handling loading, success, and error states. It also incorporates an internal caching mechanism to store and retrieve previously 
// fetched data, improving performance by reducing redundant network requests. Additionally,
// it includes a mechanism to ignore stale responses if the component unmounts or if a new request is made before the previous one completes.

https://usehooks.com/usefetch

PARAMETERS
1. url in	string --	The URL to fetch data from.
2. options	in object -- Additional options for the fetch request, such as headers or request methods.(Optional)

import {useEffect, useState} from "react";

const useFetch = (url, options = {method: "GET"}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, {...options});
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    if (url) {
      fetchData();
    }
  }, [url]); // its optional to give "options" here

  return {data, loading, error};
};

export default useFetch;


┌────────────────────────┐
│   Component Mounts     │
└────────────────────────┘
            │
            ▼
┌───────────────────────────────────────────┐
│  Call useFetch with URL and Options        │
└───────────────────────────────────────────┘
            │
            ▼
┌───────────────────────────────────────────┐
│  Initialize State: data, loading, error   │
└───────────────────────────────────────────┘
            │
            ▼
┌───────────────────────────────────────────┐
│       useEffect runs (URL changes)        │
└───────────────────────────────────────────┘
            │
            ▼
┌───────────────────────────────────────────┐
│         Define fetchData Function         │
│      1. Set loading to true               │
│      2. Fetch data from URL               │
│      3. Check response.ok                 │
│      4. Parse JSON and update data state  │
│      5. Catch errors and update error state│
│      6. Finally, set loading to false     │
└───────────────────────────────────────────┘
            │
            ▼
┌───────────────────────────────────────────┐
│   Call fetchData if URL is provided       │
└───────────────────────────────────────────┐
            │
            ▼
┌───────────────────────────────────────────┐
│ Return {data, loading, error}             │
└───────────────────────────────────────────┘
