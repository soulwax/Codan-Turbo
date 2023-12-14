# Lichtblick / CODEIA

This bot is a fork from [@don-cryptus/coding.global-bot](https://github.com/don-cryptus/coding.global-bot) that intends to make it guild agnostic, more privacy focused and generally more modular and less cancerous.
I re-christened it to be called Lichblick / CODEIA.


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
