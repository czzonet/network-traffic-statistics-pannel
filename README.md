# nodejs-excel

nodejs 简易开始模板

## 使用

将存储库复制一份，并删去其中的`.git`文件夹。

在 github 新建一个空的项目，clone 到本地，把上面复制的文件夹所有内容加入。

## 注意点

- .git 文件夹不要复制，会污染提交历史
- cp 命令复制隐藏文件、文件夹可以使用`.`
- rm 命令需要分别删除文件和隐藏文件，通配符不同：`./*`,`./.*`

## 演示

```sh
git clone git@github.com:czzonet/nodejs-template.git
cp ./nodejs-template ./template
cd ./template
rm -rf ./.git
cd ../
git clone git@github.com:czzonet/nodejs-project.git
cp -r ./template/. ./nodejs-project
```
