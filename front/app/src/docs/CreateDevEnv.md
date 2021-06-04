# 環境構築方法

---

1. コンテナ作成と起動
2. コンテナ内環境構築
3. Prettier による自動フォーマット有効化

---

## 1. コンテナ作成と起動

### Tree 構造 (環境構築前の app 配下は空にしておく必要がある)

```
.
├── front
│   ├── app
│   │   ├── public
│   │   │   ├── favicon.ico
│   │   │   └── index.html
│   │   ├── src
│   │   │   ├── __tests__
│   │   │   │   └── App.test.js
│   │   │   ├── components
│   │   │   │   ├── atoms
│   │   │   │   │   └── .gitkeep
│   │   │   │   ├── molecules
│   │   │   │   │   └── .gitkeep
│   │   │   │   ├── organisms
│   │   │   │   │   └── .gitkeep
│   │   │   │   ├── pages
│   │   │   │   │   └── .gitkeep
│   │   │   │   ├── router
│   │   │   │   │   └── .gitkeep
│   │   │   │   └── templates
│   │   │   │       └── .gitkeep
│   │   │   ├── images
│   │   │   │   ├── Aisin_logo.svg
│   │   │   │   └── Default_logo.svg
│   │   │   ├── logs
│   │   │   │   ├── CreateDevEnv.md
│   │   │   │   └── README.md
│   │   │   ├── styles
│   │   │   │   ├── App.css
│   │   │   │   └── index.css
│   │   │   ├── App.js
│   │   │   └── index.js
│   │   ├── .gitignore
│   │   ├── .prettierrc
│   │   ├── package-lock.json
│   │   ├── package.json
│   │   └── yarn.lock
│   ├── .dockerignore
│   └── Dockerfile
├── .env
├── .gitignore
├── README.md
└── docker-compose.yml
```

### Dockerfile (環境構築完了後はコメント外す)

```
FROM node:14.15.4-slim
ENV CI true
# COPY ./app/package.json /home/app/package.json
WORKDIR /home/app
RUN npm install
```

### docker-compose.yml

```
version: '3.3'
services:
  front:
    image: ${PROJ_NAME}:latest
    container_name: ${PROJ_NAME}
    build:
      context: ./front
      dockerfile: Dockerfile
    volumes:
      - ./front/app:/home/app
      - front-volume:/home/app/node_modules
    ports:
      - ${DEV_PORT}:3000
      - ${PROD_PORT}:5000
    tty: true
volumes:
  front-volume:
    name: ${PROJ_NAME}-volume
    driver: local
```

### .env(自由に変更)

```
PROJ_NAME=basement_jsx
DEV_PORT=3000
PROD_PORT=5000
```

## 2. コンテナ内環境構築

### コンテナ内に入る (起動は docker-compose up -d)

```
docker-compose exec front bash
```

### React プロジェクト の作成

- /home/ で下記コマンドを実施

```
npx create-react-app app
```

### 不要なファイルを削除 (1. の Tree 構造になるように修正)

- src/ public/ 内の不要ファイルを削除
- App.test.js を下記のように編集（コピペ）

```
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByRole('heading');
  expect(linkElement).toBeTruthy();
});
```

### .prettierrc の作成

```
{
  "jsxSingleQuote": true,
  "singleQuote": true,
  "trailingComma": "all",
  "semi": false
}
```

## 3. Prettier による自動フォーマット有効化

### 拡張機能で Prettier をインストールする

### 動作確認

- src/index.js を開いて保存したときにセミコロンが無くなれば OK

```
import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
```
