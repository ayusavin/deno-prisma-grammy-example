# 🤖 Deno Telegram Bot with Prisma

A Telegram bot built with Deno, Grammy, and Prisma ORM for message logging.

## 📑 Table of Contents

- [Prerequisites](#-prerequisites)
- [Project Setup](#-project-setup)
- [Project Structure](#-project-structure)
- [Available Tasks](#-available-tasks)
- [Database Schema](#-database-schema)
- [Environment Variables](#-environment-variables)
- [Database Migrations](#-database-migrations)

## 🔧 Prerequisites

- [Deno](https://deno.land/)
- [Docker](https://www.docker.com/) and Docker Compose
- A Telegram Bot Token (get it from [@BotFather](https://t.me/botfather))

## 🚀 Project Setup

1. Clone the repository

2. Copy `.env.example` to `.env` and fill in the values

3. Start the PostgreSQL database:

```bash
docker-compose up -d
```

4. Generate Prisma client:

```bash
deno task prisma:generate
```

5. Run database migrations:

```bash
deno task migrate
```

6. Start the development server:

```bash
deno task dev
```

## 📁 Project Structure

The main components of the project are:

- `prisma/schema.prisma`: Database schema definition
- `src/bot/`: Telegram bot logic and controllers
- `src/config.ts`: Environment configuration with Zod validation
- `src/database.ts`: Prisma client initialization
- `docker-compose.yaml`: PostgreSQL database configuration

## 🔐 Environment Variables

- `DATABASE_URL`: PostgreSQL connection string
- `TELEGRAM_BOT_TOKEN`: Your Telegram bot token from BotFather
- `USE_WEBHOOK`: Set to "true" if you want to use webhooks instead of long polling

## 🔄 Database Migrations

To create new migrations when you change the schema:

1. Make your changes to `prisma/schema.prisma`
2. Run the following command:

```bash
deno task makemigrations "description-of-your-changes"
```

For example:

```bash
deno task makemigrations "add-user-email-field"
```

This will:

- Create a new migration file in `prisma/migrations`
- Apply the changes to your database
- Generate updated Prisma client code

After creating migrations, don't forget to run them in other environments using:

```bash
deno task migrate
```
