<p align="center">
  <a href="https://github.com/0-don/coding.global-bot">
    <img src="https://raw.githubusercontent.com/0-don/coding.global-web/master/public/images/logo_512.gif" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Lichtblick / CODEIA (old name: Codan) - a fork of don-cryptus/coding.global bot</h3>

  <p align="center">
    The official bot for the <a href="https://discord.gg/coding">discord.gg/coding</a> Discord Server.
    <br />
    <a href="#about-the-bot"><strong>» Explore the docs</strong></a>
    <br />
    ·
    <a href="https://github.com/0-don/coding.global-bot/issues">Report Bug</a>
    ·
    <a href="https://github.com/0-don/coding.global-bot/issues">Request Feature</a>
  </p>
</p>

### Slash Commands

---

- **/delete-messages**

  - **Description**: Deletes messages from a channel.
  - **Options**:
    - **amount**: Delete message history.

- **/me**

  - **Description**: Get your stats.

- **/members**

  - **Description**: Member flow and count of the past.

- **/top**

  - **Description**: Get top user stats.

- **/translate**

  - **Description**: Translate text to English.
  - **Options**:
    - **text**: The text to translate.

- **/troll-move-user**

  - **Description**: Troll move user around empty voice channels.
  - **Options**:
    - **user**: Select either user which should be moved.

- **/user**

  - **Description**: Get stats from a specific user.
  - **Options**:
    - **user**: Select the user whose stats should be shown.

- **/verify-all-users**

  - **Description**: Verify all users in the server.

- **/ai**
  - **Description**: Talk to the AI
  - **Options**:
    - **text**: Ask the AI a question.

### restore db in docker

```sh
docker exec -i codandb pg_restore -U postgres -c -d codandb -v < ~/codandb-latest.sql.gz
```

### backup raw restore db in docker

```sh
docker exec -ti codandb pg_dump -U postgres codandb > codandb.sql

cat codandb.sql | docker exec -i codandb psql -U postgres -d codandb
```

---

## Features

- **Database Management**: The bot has capabilities to backup and restore the database within a Docker environment.
- **Role Management**: Provides role templates for easy role assignments.
- **Code Execution**: (Assumed based on the project name and context) The bot might have capabilities to execute or evaluate code snippets.

## Setup and Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/soulwax/Lichtblick.git
   ```

2. **Navigate to the Project Directory**:

   ```bash
   cd Lichtblick
   ```

3. **Install Dependencies**:

   ```bash
   npm i
   ```

4. **Setup Environment Variables**: Copy the `.env.example` file to `.env` and fill in the necessary details.

5. **The Red Pill: DB Setup / My recommendation**:
   - Setup postgresql on your machine.
   ```bash
   sudo -u postgres psql
   CREATE DATABASE codandb;
   CREATE USER codan WITH ENCRYPTED PASSWORD 'codanpassword';
   GRANT ALL PRIVILEGES ON DATABASE codandb TO codan;
   ```
   - Names are obviously up to you, take them to the .env file.
   - You are pretty much done now assuming your .env is set up according to the standards of your own guild.
   - Install globally: `npm i pm2 -g`
   - run `npm run pm2`
   - run `pm2 startup` and follow the instructions for persisting the process manager.
   - ** You are done from here, the Docker Process is Optional! **

6. **The Blue Pill: Docker Setup**:
   - Install Docker and Docker Compose.
   - From this point forward I will assume your .env is set up and you have a database and user with access to it.
   - Build the Docker image:

     ```bash
     docker build -t Lichtblick .
     ```

   - Run using docker-compose:

     ```bash
     docker-compose up -d
     ```

8. **Database Operations**:
   - Restore Database:

     ```bash
     docker exec -ti lichtblick-db pg_restore -U postgres -c -d test /backups/daily/lichtblick-db-latest.sql.gz
     ```

   - Backup Database:

     ```bash
     docker exec -ti lichtblick-db pg_dump -U postgres lichtblick-db > lichtblick-db.sql
     cat lichtblick-db.sql | docker exec -i lichtblick-db psql -U postgres -d lichtblick-db
     ```

## Contribution

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is open-source and was originally licensed under MIT. I make it GPT-3 licensed, which means you can do whatever you want with it, as long as your forks and other changes are also GPT-3.
