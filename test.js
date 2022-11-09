const arrList = ['Tom', 'Jerry', 'Cat', 'Mouse'];
const myObj = {};

for (let i = 0; i < arrList.length; i++) {
  myObj[i] = arrList[i];
}

// console.log(arrList);
// console.log(myObj);

// OR
const arrList2 = ['Tom', 'Jerry', 'Cat', 'Mouse'];
const myObj2 = Object.assign({}, arrList2);
// console.log(arrList2);
// console.log(myObj2);

// INPUT
const arr = [
  {
    customer_id: 'KH20000000124',
    customer_name: 'Crisol Trading Limited',
    date: '2022-11-06',
    volumn: '50',
  },
  {
    customer_id: 'KH20000000124',
    customer_name: 'Crisol Trading Limited',
    date: '2022-11-07',
    volumn: '23',
  },
  {
    customer_id: 'KH20000002372',
    customer_name: 'Trafilea',
    date: '2022-11-08',
    volumn: '927',
  },
];

// OUTPUT
let series = [
    {
        name: 'Customer-1-Volumn',
        data: [1, 1, 0, 0, 20, 5, 0]
    },
    {
        name: 'Customer-2-Volumn',
        data: [100, 200, 150, 300, 250, 2000, 1000]
    },
    {
        name: 'Customer-3-Volumn',
        data: [1000, 1000, 1000, 1000, 1000, 1000, 1000]
    }
];

let seriesOutput = [];
let customer_list = [];


for (let i = 0; i < arr.length; i++) {
    // customer name
    // dataTemp -> if arr.date === '2022-11-06'(Monday) -> dataTemp[0] = arr.volumn
    // else dataTemp[i] === 0
    let name = '';
    let data = [];
    if (!customer_list.includes(arr[i].customer_name)) {
        
        customer_list.push(arr[i].customer_name);
        name = arr[i].customer_name;

        data.push(arr[i].volumn);

        seriesOutput.push({
            name: name,
            data: data
        });
    } else {
        if (arr[i].volumn) {
            seriesOutput.data.push(arr[i].volumn);
        } else {
            seriesOutput.data.push(0);
        }
    }
}

console.log(seriesOutput);













