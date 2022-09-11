import { useWindowScroll } from "./CustomizedHooks/useWindowScroll";

export default function App() {

    const [offsetY, setOffsetY] = useWindowScroll();

    console.log(offsetY);

    return (
        <div style={{height: '12000px', backgroundColor:'yellow'}}>
            {offsetY}
        </div>
    )
}