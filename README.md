# EarthwormAI Backend

##### Installation

```bash
npm ci
```

Fill in the environment variables in the `.env` file, refer to the `.env.example` file for the required variables.

```bash
cp .env.example .env
```

##### Usage `(in development mode)`

Start the Express Server

```bash
npm run dev
```

> Make sure all the ticks are green in the terminal.

---

##### Usage `(in production mode)`

```bash
npm start:prod
```

##### Development Guidelines

- ###### Code Formatting

  - Add files to the staging area
  - Use `npm run lint && npm run format` to run the eslint and prettier checks on the staged files manually

---

##### API Documentation

[![Run in Postman](https://run.pstmn.io/button.svg)]()
