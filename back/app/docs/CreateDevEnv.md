# 環境構築方法

1. コンテナ作成と起動
2. コンテナ内環境構築
3. Prettier による自動フォーマット有効化

---

## 1.コンテナ作成と起動

### Tree 構造

```
nest new .
```

```
npm
```

- add package

```
npm i -D ts-node-dev nodemon
```

- .prettierrc

```
{
  "singleQuote": true,
  "trailingComma": "all",
  "semi":false
}
```

- package.json

```
"start:dev": "STAGE=dev nest start --watch",
"start:debug": "STAGE=dev nest start --debug --watch",
"start:prod": "STAGE=prod node dist/main",
"build:watch": "tsc --watch",
"dev": "STAGE=dev nodemon /dist/main",
"dev:ts": "STAGE=dev ts-node-dev --respawn src/main"
```

- .vscode/settings.json

```
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```