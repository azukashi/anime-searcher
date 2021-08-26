# Anime Searcher Discord Bot

Discord Bot to Search an Anime from Image Source. Easily find anime from given Image URL.

![Image Preview](https://cdn.upload.systems/uploads/KPgpaIbw.png)

# Setup

To run this bot locally, You need to prepare and Configuring some files. Follow this instructions!

### Clone this Repository

```bash
$ git clone https://github.com/gifaldyazkaa/anime-searcher.git
$ cd anime-searcher
```

### Configure and Change Config File

You're now have this repository on your local computer. The next step is configuring and change `config.json` file.

Change `config.json` value to

```json
{
  "token": "your discord bot token goes here.",
  "prefix": "your discord bot prefix goes here."
}
```

### Install Required Packages

- You can run and install manually by running
  ```bash
  $ npm install
  or
  $ yarn install
  ```
- Or running `setup.sh`
  ```bash
  $ ./setup.sh
  ```

### Finally run your bot

```sh
$ npm run start # Run in Normal Mode
or
$ npm run dev # Run in Development Mode with Nodemon
```

If you're using yarn, You can do

```sh
$ yarn run start # Run in Normal Mode
or
$ yarn run dev # Run in Development Mode with Nodemon
```

### You're done.

Now, you're fully done. You can customize every single commands, or something. And let me know if you had an problem by Creating New Issue at This Repository. Thanks!

### Test your bot

Test your bot by typing this at Discord.

```yml
{bot_prefix}search https://github.com/soruly/trace.moe/raw/master/demo.jpg
```

URL Example is looks like this

![Image Test Preview](https://github.com/soruly/trace.moe/raw/master/demo.jpg)

# Slash Command Support

This Repo and Code Supporting Slash Commands. And now it's uses Discord.js v13.1.0! To make this appears in your Server, You need to check `application_commands`, and `bot` scopes in OAuth2 Tab at Discord Developer Portal. And invite your bot. Just run your bot, and Now you can enjoy Slash Command Feature for this bot.

![Scopes Image](https://cdn.upload.systems/uploads/oih6Uodv.png)

Slash Commands Menu Preview
![Slash Command List](https://cdn.upload.systems/uploads/PGWPkadG.png)

# Contributing

We're open to any contribution! Feel free to Contributing and Submitting a Pull Request!

- [Fork the Repository!](https://github.com/gifaldyazkaa/anime-searcher/fork)
- Clone your fork: `git clone https://github.com/your-username/anime-searcher.git`
- Create your feature branch: `git checkout -b my-new-feature`
- Commit your changes: `git commit -am 'Add some feature'`
- Push to the branch: `git push origin my-new-feature`
- Submit a pull request :D
