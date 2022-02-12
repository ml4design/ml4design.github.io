# HOWTO
Here is a short HOWTO guide on serving this github page locally.  
Github pages uses these [dependencies and version](https://pages.github.com/versions/).

## Installing dependencies

### MAC OS
See a guide on jekyll [here](https://jekyllrb.com/docs/installation/macos/).

#### Install Homebrew
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

#### Install rbenv and ruby-build
```bash
brew install rbenv
```

#### Set up rbenv integration with your shell
```bash
rbenv init
```

#### Check your installation
```bash
curl -fsSL https://github.com/rbenv/rbenv-installer/raw/main/bin/rbenv-doctor | bash
```

#### Install the version of ruby that github pages supports
```bash
rbenv install 2.7.3
rbenv global 2.7.3
ruby -v
```

### Ubuntu

See a guide for Jekyll on Ubuntu [here](https://jekyllrb.com/docs/installation/ubuntu/).

### Windows

See a guide on Jekyll on Windows [here](https://jekyllrb.com/docs/installation/windows/).  
Make sure to download and install the `Ruby+Devkit 2.7.5-1` that is suitable for your system.


## Serving the page locally

Go to project folder and install the gems for this theme in your local profile
```bash
gem install --user-install bundler jekyll
bundle install --path vendor/bundle
```

Make these local changes that you shouldn't commit or push.
First uncomment the first line of `_config.yml` and comment the second line so that it looks like this:
```yml
theme: just-the-docs
# remote_theme: pmarsceill/just-the-docs
```
Then use this command to serve the page:  
```bash
bundle exec jekyll serve
```