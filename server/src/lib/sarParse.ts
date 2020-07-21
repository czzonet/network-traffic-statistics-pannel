/**
 * 解析sar输出为json数组
 * @param raw 命令`sar -n DEV 1`的输出内容
 * @description  

例子：典型的如下两次传入  

1：首行不是‘\r\n’的数据会忽略  

```
Linux 5.4.0-40-generic (ubuntu) 	07/20/2020 	_x86_64_	(12 CPU)

```

2：第二行解析为列，其他非空行解析为数据

```

04:05:42 PM     IFACE   rxpck/s   txpck/s    rxkB/s    txkB/s   rxcmp/s   txcmp/s  rxmcst/s   %ifutil
04:05:43 PM     ens33      4.00      4.00      0.55      0.37      0.00      0.00      0.00      0.00
04:05:43 PM        lo      7.00      7.00      2.12      2.12      0.00      0.00      0.00      0.00

```

解析结果：

```
[
  {
    time: '04:05:43',
    ampm: 'PM',
    IFACE: 'ens33',
    'rxpck/s': '4.00',
    'txpck/s': '4.00',
    'rxkB/s': '0.55',
    'txkB/s': '0.37',
    'rxcmp/s': '0.00',
    'txcmp/s': '0.00',
    'rxmcst/s': '0.00',
    '%ifutil': '0.00'
  },
  {
    time: '04:05:43',
    ampm: 'PM',
    IFACE: 'lo',
    'rxpck/s': '7.00',
    'txpck/s': '7.00',
    'rxkB/s': '2.12',
    'txkB/s': '2.12',
    'rxcmp/s': '0.00',
    'txcmp/s': '0.00',
    'rxmcst/s': '0.00',
    '%ifutil': '0.00'
  }
]
```
*/
export function sarParse(raw: string) {
  /** 最终数组对象 */
  const arr = [];

  /** 分解行 */
  const group = raw.split("\n");
  /** 当是中间输出时 即第一行特征为'' */
  if (group[0] === "") {
    /** 从第二行取得列名 并修改前列名两列 */
    const keys = group[1].split(/\s+/);
    keys[0] = "time";
    keys[1] = "ampm";

    /** 从第三行开始算数据 倒数第二行结束 */
    for (let index = 2; index < group.length - 1; index++) {
      const line = group[index];

      const columns = line.split(/\s+/);
      /** 将值依次组合键值对 */
      const obj = {} as any;
      for (let j = 0; j < columns.length; j++) {
        const column = columns[j];
        obj[keys[j]] = column;
      }

      arr.push(obj);
    }
  } else {
  }
  return arr;
}
