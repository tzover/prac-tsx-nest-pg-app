# 記載事項

---

- 環境構築方法は CreateDevEnv.md を参照

---

## 追加パッケージ

- process.env 使用するため

```
npm i  @hapi/joi @nestjs/config
npm i -D @types/hapi__joi
```

- DB 接続

```
npm i @nestjs/typeorm typeorm @nestjs/mongoose mongoose
npm i -D @types/mongoose
```

- バリデーション

```
npm i class-validator
```

```
npm i multer
npm i -D @types/multer
npm i uuid
npm i @nestjs/serve-static
```
