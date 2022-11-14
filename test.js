/**
 * The data packet from API return value.
 */
class CustomerApiData {
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
  getDateObject() {
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
        volumn: '50'
    },
    {
        customer_id: 'KH20000000124',
        customer_name: 'Crisol Trading Limited',
        date: '2022-11-07',
        volumn: '23'
    },
    {
        customer_id: 'KH20000000124',
        customer_name: 'Crisol Trading Limited',
        date: '2022-11-08',
        volumn: '23'
    },
    {
        customer_id: 'KH20000000124',
        customer_name: 'Crisol Trading Limited',
        date: '2022-11-09',
        volumn: '2'
    },
    {
        customer_id: 'KH20000000838',
        customer_name: '苏州创摄电子商务有限公司',
        date: '2022-11-07',
        volumn: '74'
    },
    {
        customer_id: 'KH20000000838',
        customer_name: '苏州创摄电子商务有限公司',
        date: '2022-11-08',
        volumn: '29'
    },
    {
        customer_id: 'KH20000000838',
        customer_name: '苏州创摄电子商务有限公司',
        date: '2022-11-09',
        volumn: '47'
    },
    {
        customer_id: 'KH20000001454',
        customer_name: 'Impulse Modern Inc.',
        date: '2022-11-06',
        volumn: '22'
    },
    {
        customer_id: 'KH20000001454',
        customer_name: 'Impulse Modern Inc.',
        date: '2022-11-07',
        volumn: '13'
    },
    {
        customer_id: 'KH20000001454',
        customer_name: 'Impulse Modern Inc.',
        date: '2022-11-09',
        volumn: '5'
    },
    {
        customer_id: 'KH20000001582',
        customer_name: 'eComplete Growth Limited',
        date: '2022-11-07',
        volumn: '2'
    },
    {
        customer_id: 'KH20000001720',
        customer_name: 'Suzhou Demo Electronic Commerce Co., Ltd.',
        date: '2022-11-06',
        volumn: '1'
    },
    {
        customer_id: 'KH20000001720',
        customer_name: 'Suzhou Demo Electronic Commerce Co., Ltd.',
        date: '2022-11-07',
        volumn: '12'
    },
    {
        customer_id: 'KH20000001720',
        customer_name: 'Suzhou Demo Electronic Commerce Co., Ltd.',
        date: '2022-11-08',
        volumn: '6'
    },
    {
        customer_id: 'KH20000001720',
        customer_name: 'Suzhou Demo Electronic Commerce Co., Ltd.',
        date: '2022-11-09',
        volumn: '8'
    },
    {
        customer_id: 'KH20000001768',
        customer_name: '香港海鲨优品科技有限公司',
        date: '2022-11-06',
        volumn: '4'
    },
    {
        customer_id: 'KH20000001768',
        customer_name: '香港海鲨优品科技有限公司',
        date: '2022-11-08',
        volumn: '5'
    },
    {
        customer_id: 'KH20000001792',
        customer_name: 'EMACITY PTY LIMITED (T/A Onsport)',
        date: '2022-11-06',
        volumn: '1'
    },
    {
        customer_id: 'KH20000002372',
        customer_name: 'Trafilea',
        date: '2022-11-06',
        volumn: '2583'
    },
    {
        customer_id: 'KH20000002372',
        customer_name: 'Trafilea',
        date: '2022-11-07',
        volumn: '2648'
    },
    {
        customer_id: 'KH20000002372',
        customer_name: 'Trafilea',
        date: '2022-11-08',
        volumn: '2231'
    },
    {
        customer_id: 'KH20000002372',
        customer_name: 'Trafilea',
        date: '2022-11-09',
        volumn: '2257'
    },
    {
        customer_id: 'KH20000003289',
        customer_name: '杭州铉浩科技有限公司',
        date: '2022-11-06',
        volumn: '1'
    },
    {
        customer_id: 'KH20000003289',
        customer_name: '杭州铉浩科技有限公司',
        date: '2022-11-07',
        volumn: '1'
    },
    {
        customer_id: 'KH20000003453',
        customer_name: 'MinisoUSB2C',
        date: '2022-11-07',
        volumn: '20'
    },
    {
        customer_id: 'KH20000003453',
        customer_name: 'MinisoUSB2C',
        date: '2022-11-08',
        volumn: '1'
    },
    {
        customer_id: 'KH20000003453',
        customer_name: 'MinisoUSB2C',
        date: '2022-11-09',
        volumn: '5'
    }
];

/**
 * This data is only for the chart display purpose, customer id is NOT included.
 * Therefore this data cannot be used to trace back to the source data.
 */
class SeriesDataNode {
  dataId;
  /**
   * @type{CustomerApiData[] | null}
   */
  rawDataList = [];
  /**
   *
   * @param {CustomerApiData} d
   */
  pushToRawDataList(d) {
    this.rawDataList.push(d);
  }
  name;
  data = [0, 0, 0, 0, 0, 0, 0];

  summarize() {
    this.rawDataList.forEach((s) => {
      // console.log(s.getDateObject());
      let weekday = s.getDateObject().getDay();
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
  static Create(customerInfo) {
    var c = new SeriesDataNode();
    c.dataId = customerInfo.customer_id;
    c.customer_id = customerInfo.customer_id;
    c.name = customerInfo.customer_name;
    c.data = [0, 0, 0, 0, 0, 0, 0];
    return c;
  }
}
// OUTPUT
let series = [
  {
    name: 'Customer-1-Volumn',
    data: [1, 1, 0, 0, 20, 5, 0],
  },
  {
    name: 'Customer-2-Volumn',
    data: [100, 200, 150, 300, 250, 2000, 1000],
  },
  {
    name: 'Customer-3-Volumn',
    data: [1000, 1000, 1000, 1000, 1000, 1000, 1000],
  },
];

/**
 * @type {SeriesDataNode[]}
 */
let inputData = [];

arr.forEach((element) => {
  let t = inputData.find((s) => s.dataId == element.customer_id);

  if (t === undefined || t === null) {
    t = SeriesDataNode.Create(element);
    inputData.push(t);
  }
  
  t.pushToRawDataList(new CustomerApiData(element));
});

// console.log(inputData);

inputData.forEach((s) => {
  s.summarize();
});

// console.log(inputData);

let series_output = [];
inputData.forEach(element => {
    series_output.push({
        name: element.name,
        data: element.data
    });
});

console.log(series_output);







