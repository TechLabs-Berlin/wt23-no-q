import { useState, useEffect } from 'react';

const useLocalStorage = (key, intiValue) => {
    // parse because we are gonna parsing what we pull out from the storage
    // and we are gonna get a key and the existing value
    const [value, setValue] = useState(JSON.parse(localStorage.getItem(key))
        || intiValue)
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
        // if one of these dependencies changes then useEffect is triggered
    }, [key, value])
    return [value, setValue];
}

export default useLocalStorage;