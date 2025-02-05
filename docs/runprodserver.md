# Run Production Server

### Built with:

- Docker: [https://www.docker.com/](https://www.docker.com/)
- Nginx: [https://nginx.org/end/](https://nginx.org/en/)
- Let's Encrypt [https://letsencrypt.org/](https://letsencrypt.org/)

# How To Start

```
1. Copy the .env.docker-example and rename to .env
2. Set .env variables as needed
```

### SSL Support

Configure the following in .env

- LE_DOMAIN=example.com
- LE_EMAIL=email@example.com
- LE_OPTIONS= (Extra certbot switches. ex. --staging) *(Optional)*
- RENEW_INTERVAL= (Any valid *sleep* values. Default: 12h) *(Optional)*

*Automatic Registration and renewal of certificates is provided using certbot by Let's Encrypt.*

### Build and Start

:::info
Be sure to install dependencies for both client and server.
:::

```bash
docker compose build
docker compose up -d
```

## Socket.IO Admin UI

:::danger
At the moment, this UI is not fully secured. Therefore, access
is limited to localhost. If you choose to run this in production,
you will probably want to add extra security.
:::

```bash
docker compose --file sio-admin-compose.yml up -d

http://localhost:85

Enter 'http://localhost:85' as the Server URL
```
