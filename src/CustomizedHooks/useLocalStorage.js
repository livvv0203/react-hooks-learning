import { useState } from 'react';
import { useEffect } from 'react';

export function useLocalStorage(key, defaultValue) {

    const [message, setMessage] = useState(defaultValue);

    // Sync change to local storage, on message change
    useEffect(() => {
        window.localStorage.setItem(key, message);
    }, [message]);

    return [message, setMessage];
}




