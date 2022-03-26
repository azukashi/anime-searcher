[![Project card](https://cdn.upload.systems/uploads/3D4J4rLV.png)](#)
![CI Status](https://img.shields.io/github/workflow/status/gifaldyazkaa/anime-searcher/%5BPrettier%5D%20Format%20Checking?label=CI&logo=github-actions&style=for-the-badge) ![Repo size](https://img.shields.io/github/repo-size/gifaldyazkaa/anime-searcher?logo=github&style=for-the-badge)

## 📂 Commands

Here is Command List of Anime Searcher!

### Normal Commands

| **Name**           | **Description**                                               |
| ------------------ | ------------------------------------------------------------- |
| <kbd>>help</kbd>   | Show Help Menu                                                |
| <kbd>>ping</kbd>   | Show Client Ping Latency                                      |
| <kbd>>search</kbd> | Search Anime from a Image. Requires Image URL or Upload Image |

### Slash Commands

| **Name**           | **Description**                               |
| ------------------ | --------------------------------------------- |
| <kbd>/help</kbd>   | Show Help Menu                                |
| <kbd>/ping</kbd>   | Show Client Ping Latency                      |
| <kbd>/search</kbd> | Search Anime from a Image. Requires Image URL |

## 💎 Features

- Help Desk Menu.
- Ping Commands.
- Search Anime Directly from Image URL or Upload Image with <kbd>>search</kbd> caption.
- Slash Command Support.
- Add & Set Channel using MongoDB (WIP).

## ➡️ Developing

### 🛠️ Requirements

A node.js >= 16.12.0 setup with [yarn](https://yarnpkg.com) is recommended.

### 📄 Copy and create Environment Variables

```sh
# Linux / macOS
$ cp .env.example .env

# Windows
> copy .env.example .env
```

### 📝 Fill all required fields at .env

```
TOKEN="your discord bot token"
PREFIX=">"
MONGOURI="your mongo connection string"
OWNERID="your discord user id"
TESTSERVER="your discord server id"
```

> By default, Prefix set to <kbd>></kbd>. However, you can change it.

### 📦 Install Dependencies

```sh
$ yarn install
#
# yarn install v1.22.18
# [1/4] 🔍  Resolving packages...
# [2/4] 🚚  Fetching packages...
# [3/4] 🔗  Linking dependencies...
# [4/4] 🔨  Building fresh packages...
#
# ✨  Done in 4.38s.
```

### 🏃 Run your bot

```sh
$ yarn start
#
# yarn run v1.22.18
# $ ts-node --transpile-only ./src/index.ts
# ✔ [CLIENT] Anime Searcher#0000 ready
# ✔ [DATABASE] Connected
```

## 👨‍💻 Contributing

We're open to contributions! Just make changes and Send your PR

## 📃 License

Anime Searcher is Licensed Under [Apache-2.0](blob/master/LICENSE) License.
