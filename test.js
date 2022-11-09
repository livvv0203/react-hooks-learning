const arrList = ['Tom', 'Jerry', 'Cat', 'Mouse'];
const myObj = {};

for (let i = 0; i < arrList.length; i++) {
  myObj[i] = arrList[i];
}

// OR
const arrList2 = ['Tom', 'Jerry', 'Cat', 'Mouse'];
const myObj2 = Object.assign({}, arrList2);

/**
 * The data packet from API return value.
 */
class CustomerApiData{

    constructor(obj) {
        obj && Object.assign(this, obj);
      }

    /**
     * @type{string}
     */
    customer_id;
    /**
     * @type{string}
     */
    customer_name;
    /**
     * @type{string} the raw date string.
     */
    date;
    /**
     * Get the Date object
     * @returns {Date | null} the Date object parsed from date.
     */
    getDateObject(){
        if (this.date === undefined || this.date === null) return null;
        return new Date(this.date);
    }
    /**
     * @type{number}
     */
     volumn = 0;
}


// INPUT
/**
 * @type{CustomerApiData[]}
 */
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


/**
 * This data is only for the chart display purpose, customer id is NOT included.
 * Therefore this data cannot be used to trace back to the source data.
 */
class SeriesDataNode{
    dataId;
    /**
     * @type{CustomerApiData[] | null}
     */
    rawDataList = [];
    /**
     * 
     * @param {CustomerApiData} d 
     */
    pushToRawDataList(d){
        this.rawDataList.push(d);
    }
    name;
    data=[0,0,0,0,0,0,0];


    summarize(){
        this.rawDataList.forEach(s=>{
            //console.log(s.getDateObject());
            let weekday =s.getDateObject().getDay();
            this.data[weekday] = Number.parseFloat(s.volumn);
        });

    }

    /**
     * Create an empty customer series data.
     * This will convert api returned data into a series data struct,
     * However, no value field will be analyzed (all data remains zero)
     * @param {CustomerApiData} customerInfo 
     * @returns {SeriesDataNode}
     */
    static Create(customerInfo){
        var c= new SeriesDataNode();
        c.dataId = customerInfo.customer_id;
        c.customer_id = customerInfo.customer_id;
        c.name = customerInfo.customer_name;
        c.data = [0,0,0,0,0,0,0]
        return c;
    }
}
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

/**
 * @type {SeriesDataNode[]}
 */
let inputData = [];



arr.forEach(element => {

    let t = inputData.find(s=>s.dataId == element.customer_id)

    if (t === undefined || t === null){
        t = SeriesDataNode.Create(element);
        inputData.push(t);
    }
    
    t.pushToRawDataList(new CustomerApiData(element));
});

console.log(inputData);


inputData.forEach(s=>{
    s.summarize();
});

console.log(inputData);














