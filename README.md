# 功能

- 前端导出 `Excel`

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
    // addData 一次性添加所有数据
    // pushData 添加一行数据
    ws.addData([['Alex', 18, 0], ['张三', 20, 1]]);
  }

  wb.export();
  ```

# TODO

- 导出`text`, `JSON`

## CHANGELOG

- `1.2.0`
  - `2019/08/29`
    - 更新依赖版本
