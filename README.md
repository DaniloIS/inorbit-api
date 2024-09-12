# in.orbit

![preview](assets/inorbit.png)

## Local Setup

1. Install packages

```
npm install
```

2. Starts the containers specified in docker-compose.yml

```
docker compose up -d
```

3. Starts the inorbit-api-pg-1 container

```
docker start inorbit-api-pg-1
```

4. Run migrations

```
npx drizzle-kit migrate
```

5. Run seeds

```
npx run seed
```

6. Run the server

```
npm run dev
```