[![Maintainability](https://api.codeclimate.com/v1/badges/c1484f7a6f9a3cd37df2/maintainability)](https://codeclimate.com/github/gomez-git/backend-project-lvl1/maintainability)
[![Known Vulnerabilities](https://snyk.io/test/github/gomez-git/backend-project-lvl1/badge.svg)](https://snyk.io/test/github/gomez-git/backend-project-lvl1)
[![hexlet-check](https://github.com/gomez-git/backend-project-lvl1/actions/workflows/hexlet-check.yml/badge.svg?branch=main)](https://github.com/gomez-git/backend-project-lvl1/actions/workflows/hexlet-check.yml)
[![NodeCI](https://github.com/gomez-git/backend-project-lvl1/actions/workflows/NodeCI.yml/badge.svg?branch=main)](https://github.com/gomez-git/backend-project-lvl1/actions/workflows/NodeCI.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
# Welcome to the Brain Games!
This is my first JavaScript project based on Hexlet backend courses. I built a collection of 15 brain games.

This is a second version of games, you can find first version [here](https://github.com/gomez-git/backend-project-lvl1/tree/v1.0.1).
## Quick start
Copy this commands and paste in a terminal, note that clone command using ssh.
```bash
git clone git@github.com:gomez-git/backend-project-lvl1.git
cd backend-project-lvl1
make install
brain-games -h

```
## Description
Brain games is a CLI utility with 15 games inside.

You can play games endless or not, define maximum rounds you want to play each game and define minimum and maximum numbers which will be used in games (some games doesn't support this option).
```bash
$ brain-games -h
Usage: brain-games [options]

A collection of 15 brain games

Options:
  -v, --version               output the version number
  -e, --endless               play games endless (default: true)
  -o, --no-endless            play one game
  -r, --max-rounds <rounds>   define max game rounds (default: 3)
  -n, --numbers <numbers...>  define min and max numbers (default: [1,100])
  -h, --help                  display help for command
```
## Preview of brain-games
### Brain-games with default options
[![asciicast](https://asciinema.org/a/0U7QZqZh4T5huRVOfPyeY1VcT.svg)](https://asciinema.org/a/0U7QZqZh4T5huRVOfPyeY1VcT)
### Brain-games with custom options
[![asciicast](https://asciinema.org/a/eoAO5Y5IgBtLifATA2CXDTrih.svg)](https://asciinema.org/a/eoAO5Y5IgBtLifATA2CXDTrih)
