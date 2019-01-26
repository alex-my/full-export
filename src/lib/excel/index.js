import JSExportExcel from 'js-export-excel';
import _ from 'lodash';

// [{
//   sheetData:[], // 数据
//   sheetName:'', // sheet名字
//   sheetFilter:[], //列过滤
//   sheetHeader:[] // 第一行
//   }]

class ExcelSheet {
  constructor(name) {
    this.name = name;
    this.header = [];
    this.data = [];
  }

  addHeader(headerList) {
    this.header = headerList;
  }

  addData(dataList) {
    this.data = dataList;
  }

  pushData(data) {
    this.data.push(data);
  }
}

class Excel {
  constructor(name) {
    this.name = name;
    this.ess = {};
  }

  addWorkSheet(sheetName) {
    if (_.isNil(sheetName)) {
      return null;
    }
    const ws = new ExcelSheet(sheetName);
    this.ess[sheetName] = ws;
    return ws;
  }

  export() {
    const datas = [];

    _.forEach(this.ess, (ws) => {
      datas.push({
        sheetName: ws.name,
        sheetHeader: ws.header,
        sheetData: ws.data,
      });
    });

    const options = {
      fileName: this.name,
      datas,
    };
    const toExcel = new JSExportExcel(options);
    toExcel.saveExcel();
  }
}

export default Excel;
