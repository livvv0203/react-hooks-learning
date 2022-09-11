import "./Test.css";

export default function App() {
  let input = "     React DEV       ";
  // let output = "<div>" + input.trim() + "</div>";
  // console.log(input);
  // console.log(input.trim());
  // console.log(output);

  // Reusable Functions
  const trim = (str) => str.trim();
  const wrapInDiv = (str) => `<div>${str}</div>`;
  // JSON.stringfy(), JSON.parse()
  const list = [
    {
      productName: "Apple",
      productCount: 2,
      productColor: "red",
    },
    {
      productName: "Apple",
      productCount: 3,
      productColor: "green",
    },
    {
      productName: "Apple",
      productCount: 5,
      productColor: "blue",
    },
    {
      productName: "Pear",
      productCount: 5,
      productColor: "pink",
    },
  ];

  // const [list, setList] = useState([]);

  const toLowerCase = (str) => str.toLowerCase();
  const result = wrapInDiv(toLowerCase(trim(input)));
  console.log(input);
  console.log(result);

  return (
    <div>
      <table>
        <tr>
          <th>Item Name</th>
          <th>Item Count</th>
          <th>Item Color</th>
        </tr>
        {list.map((item, index) => (
          <tr key={index}>
            <td>{item.productName}</td>
            <td>{item.productCount}</td>
            <td>{item.productColor}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}