import { useWindowScroll } from "./CustomizedHooks/useWindowScroll";
import { useLocalStorage } from "./CustomizedHooks/useLocalStorage";

export default function App() {

    const [offsetY, setOffsetY] = useWindowScroll();
    const [message, setMessage] = useLocalStorage('hook-key', 'Jieqing');

    setTimeout(() => {
        setMessage('Liu');
    }, 3000);

    return (
        <div style={{height: '12000px', backgroundColor:'yellow'}}>
            {offsetY} - {message}
        </div>
    )
}












