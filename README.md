
# 主应用
main-demo

# 子应用
chil-demo

# 开发

```
cd main-demo
pnpm install
pnpm run dev


cd child-demo
pnpm install
pnpm run dev
```

# 访问
## 子应用
http://localhost:8001/curry-fe-child/home

## 主应用嵌套的子应用
http://localhost:8000/home/home

# 复现
1. 修改子应用代码，子应用热更新正常(http://localhost:8001/curry-fe-child/home)
2. 主应用热更新失效（主应用嵌套的子应用:http://localhost:8000/home/home）,需要手动刷新。