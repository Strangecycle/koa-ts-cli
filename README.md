# koa-ts-cli

## 安装依赖
```
npm install
```

### 设置根目录 config.json 的 mysql 配置
```
"mysql": {
    "user": "root",
    "password": "1234",
    "host": 3306,
    "database": "mybatis"
}
```

### 修改 models/user 下的用于测试的 TABLE_NAME
```
const TABLE_NAME = 'STUDENT';
```

### 尝试运行
```
npm run dev
```

##### 运行成功后尝试访问 /users/login 与 /users/ 测试数据库是否能成功返回数据

### 编译 typescript
```
tsc
```

#### 注意：bin/www 引入的可以选择引入 app.ts（开发时） 或 tsc/app.js（编译后）
