import { spawn } from "child_process";

/**
 * 读取类似ping不断输出的shell命令
 * @param command 执行的shell
 * @param args shell参数
 * @param cb 输出的回调函数
 * @param error 错误的回调函数
 * @description  
例子：

```ts
readUpdateOutputFromShell("sar", ["-n", "DEV", "1"],(data)=>{
   console.log(data)
},(err)=>{console.error(err)}
```
 */
export const readUpdateOutputFromShell = async (
  command: string,
  args: readonly string[],
  cb: (data: any) => any,
  error: (err: any) => any
) =>
  new Promise((resolve, reject) => {
    const runpProcess = spawn(command, args, {
      stdio: ["pipe", "pipe", "pipe"],
      cwd: __dirname,
      env: process.env,
      detached: true,
    });

    /** 监听输出 */
    runpProcess.stdout.on("data", cb);

    /** 错误处理 */
    runpProcess.stderr.on("data", error);

    /** 结束处理 */
    runpProcess.on("close", (code) => {
      resolve();
    });
  });
