# 環境設定

## もろもろインストール

```
npm install -g json-server
yarn install
```

## モックサーバー立ち上げ

立ち上げたら別ターミナルで作業

```
json-server --watch mock/db.json -m mock/middleware.js --port 3004
```

## サーバー起動

立ち上げたら別ターミナルで作業

```
yarn start
```

# 最新のコミットを持ってくる

## git 追従

これは一度切り

```
git remote add upstream git@github.com:asasigure1209/gw-hackathon-backend.git
```

ここから毎回やる

```
git fetch upstream
```

```
git checkout master
```

```
git merge upstream/master
```
