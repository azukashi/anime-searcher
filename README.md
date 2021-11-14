<div align="center">

# Anime Searcher Discord Bot

🔎 Discord Bot to Search an Anime from Image Source. Easily find anime from given Image URL.

[![Image Preview](https://cdn.upload.systems/uploads/7J1cBoB3.png)](https://i.upload.systems/7J1cBoB3)

</div>

## Commands

Here is Command List of Anime Searcher!

### Normal Commands

| **Name** | **Description**                                               |
| -------- | ------------------------------------------------------------- |
| `help`   | Show Help Menu                                                |
| `ping`   | Show Client Ping Latency                                      |
| `search` | Search Anime from a Image. Requires Image URL or Upload Image |

### Slash Commands

| **Name**  | **Description**                               |
| --------- | --------------------------------------------- |
| `/help`   | Show Help Menu                                |
| `/ping`   | Show Client Ping Latency                      |
| `/search` | Search Anime from a Image. Requires Image URL |

## Feature

- Help Desk Menu.
- Ping Commands.
- Search Anime Directly from Image URL or Upload Image with `[prefix]search` caption.
- Slash Command Support.
- Add & Set Channel using MongoDB (WIP).

## Setup

### Clone this Repository

```bash
$ git clone https://github.com/gifaldyazkaa/anime-searcher.git
$ cd anime-searcher
```

### Copy and create Environment Variables

```sh
$ cp .env.example .env
```

### Fill all required fields at .env

```
TOKEN=your_discord_bot_token
PREFIX=your_discord_bot_prefix
```

### Install Required Packages

```sh
# npm
$ npm install

# yarn
$ yarn install
```

### Run your bot

```sh
# Normal
$ yarn start

# Development
$ yarn run dev
```

### You're done.

## Try it yourself

Try it yourself by searching an anime with this example image!

```
[prefix]search https://cdn.upload.systems/uploads/UY0zzn4Z.jpg
```

> Change `[prefix]` with your discord bot prefix!

The example image is looks like this

[![Example Image](https://cdn.upload.systems/uploads/UY0zzn4Z.jpg)](https://i.upload.systems/UY0zzn4Z)

You can visit [i.upload.systems/UY0zzn4Z](https://i.upload.systems/UY0zzn4Z) to Getting RAW Image and Download it. Then, you can try to upload the image with `[prefix]search` caption.

## Reporting Problems

Have some problems or bugs to report? Please [Create a new issues!](https://github.com/gifaldyazkaa/anime-searcher/issues/new) We'll happy to hear the problems and helps you! Thanks~!

## Contributing

We're open to any contribution! Feel free to Contributing and Submitting a Pull Request!

- [Fork the Repository!](https://github.com/gifaldyazkaa/anime-searcher/fork)
- Clone your fork: `git clone https://github.com/your-username/anime-searcher.git`
- Create your feature branch: `git checkout -b my-new-feature`
- Commit your changes: `git commit -am 'Add some feature'`
- Push to the branch: `git push origin my-new-feature`
- Submit a pull request :D

## License

This Project is Under [Apache-2.0](blob/master/LICENSE)
