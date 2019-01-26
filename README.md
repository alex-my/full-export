# 功能

- 前端导出`文本`, `JSON`, `Excel`

# 依赖

- [JsonExportExcel](https://github.com/cuikangjie/JsonExportExcel)

# 安装

    ```text
    npm install --save full-export
    ```

# 使用

- 导出`excel`

  ```text
  // 支持中文

  import fullExport from 'full-export';

  const wb = new fullExport.Excel('excelname');

  for (let i = 1; i <= 5; ++i) {
    const ws = wb.addWorkSheet(`w-${i}`);
    ws.addHeader(['姓名', '年龄', 'sex']);
    ws.addData([['Alex', 18, 0], ['张三', 20, 1]]);
  }

  wb.export();
  ```
