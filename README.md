# Home Dashboard

## Description

### Demo

A fully functional demo is available at: (http://website)

### Table of Contents

- [Usage](#usage)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [License](#copyright-and-license)

### Usage

#### Using docker

```sh
docker run -p 8080:8080 -v /your/local/config.yml:/www/config.yml -v /your/local/assets/:/www/assets simbaja/homedash:latest
```

#### Manually

Homer is a static page that need to be generated from the source in this repository.
Use the folowing command to build the project:

```sh
npm install
npm run build
```

Then your dashboard is ready to use in the `/dist` directory.
The `dist` directory is meant to be served by an HTTP server, so **it will not work if you open dist/index.html directly over file:// protocol**.

Use it like any static HTML content (use a webserver or open the html index directly).

#### Development

```sh
npm install
npm run serve
```

### Documentation

## Copyright and license

Code released under [the MIT license](https://github.com/simbaja/homedash/blob/master/LICENSE).)
