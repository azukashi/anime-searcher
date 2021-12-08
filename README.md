<div align="center">

# 🔎 Anime Searcher Discord Bot

Discord Bot to Search an Anime from Image Source. Easily find anime from given Image URL.

[![Image Preview](https://cdn.upload.systems/uploads/7J1cBoB3.png)](https://i.upload.systems/7J1cBoB3)

</div>

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

## 💎 Feature

- Help Desk Menu.
- Ping Commands.
- Search Anime Directly from Image URL or Upload Image with <kbd>!search</kbd> caption.
- Slash Command Support.
- Add & Set Channel using MongoDB (WIP).

## ➡️ Getting Started

### 📥 Clone this Repository

```bash
# Using Git
$ git clone https://github.com/gifaldyazkaa/anime-searcher.git
$ cd anime-searcher

# Using GitHub CLI
$ gh repo clone gifaldyazkaa/anime-searcher
$ cd anime-searcher
```

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

> By default, Prefix set to <kbd>!</kbd>. However, you can change it!

### 📦 Install Required Packages

```sh
# using yarn
$ yarn install

# using npm
$ npm install
```

### 🏃 Run your bot

```sh
# Using yarn
$ yarn start

# Using dum
$ dum start
```

### 🎉 You're done!

## 📨 Try it yourself

Try it yourself by searching an anime with this example image!

```
>search https://cdn.upload.systems/uploads/UY0zzn4Z.jpg
```

The example image is looks like this

[![Example Image](https://cdn.upload.systems/uploads/UY0zzn4Z.jpg)](https://i.upload.systems/UY0zzn4Z)

You can visit [i.upload.systems/UY0zzn4Z](https://i.upload.systems/UY0zzn4Z) to Getting RAW Image and Download it. Then, you can try to upload the image with <kbd>!search</kbd> caption.

## 👨‍💻 Contributing

We're open to contributions! However, Feel free to Sent a Pull Request!

## 📃 License

Anime Searcher is Under [Apache-2.0](blob/master/LICENSE).
