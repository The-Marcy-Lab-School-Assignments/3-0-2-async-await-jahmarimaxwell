export const fetchHandler = async (url, options = {}) => {
    // using async keyword before function declaration
    // fetch handler takes in url and default value of an empty object
    
    try {
    const response = await fetch(url, options);
    // defines a repsonse and fetch the data using the parameters in function
    if (!response.ok) throw new Error(`Fetch failed with status - ${response.status}, ${response.statusText}`)
    const isJson = (response.headers.get('content-type') || '').includes('application/json')
    if (isJson) {
      const jsonData = await response.json()
      return [jsonData, null]
    }
    else {
    const textData = await response.text();
    return [textData, null]
    }
    // throw new error if response status is ok
    return [{}, null]
   }
    // returns a default tuple
    catch (error) {
        // if there was an error, log it and return a tuple: [data, error]
        console.warn(error);
        return [null, error]
    }

  }
