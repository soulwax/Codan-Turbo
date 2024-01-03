<p align="center">
  <a href="https://github.com/don-cryptus/coding.global-bot">
    <img src="https://raw.githubusercontent.com/don-cryptus/coding.global-web/master/public/images/logo_512.gif" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Lichtblick / CODEIA (old name: Codan) - a fork of don-cryptus/coding.global bot</h3>

  <p align="center">
    The AI driven bot for the Imperial Cult Discord Server.
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
