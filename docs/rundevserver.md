# Run Development Server

## How To Start

- Copy the .env.example and rename to .env
- Set .env variables as needed

## SSL Support

To generate certs for localhost, run the openssl command below. Use the premade config.

```bash
openssl req -x509 -nodes -newkey rsa:4096 -sha256 -days 1 \
    -keyout client/cert/local.privkey.pem \
    -out client/cert/local.fullchain.pem \
    -subj '/CN=localhost' -extensions EXT -config client/cert/localcert.conf
```

:::caution
Make sure output is into client/cert directory using the given names. Or change the paths in client/.env
:::

## Start the server and client

:::info
You can use the provided docker containers for Redis and Socket.io admin ui
during development.
```bash
docker compose --file dev-compose.yml up -d
```
:::

### Install and Run
```bash
npm i
npm run dev
```

## Socket.IO Admin UI

```
http://localhost:85
```

## RedisInsight

RedisInsight is available while using the development redis server.

```
http://localhost:8001
```
