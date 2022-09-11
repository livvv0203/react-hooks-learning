import { useState } from 'react';

export function useWindowScroll() {

    const [offsetY, setOffsetY] = useState(0);

    window.addEventListener('scroll', () => {
        const height = document.documentElement.scrollTop;
        setOffsetY(height);
    });

    return [offsetY];
}







