---
nav_exclude: true
---

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

1. Download and install a Ruby+Devkit version (**2.7.5**) from [RubyInstaller Downloads](https://github.com/oneclick/rubyinstaller2/releases/download/RubyInstaller-2.7.5-1/rubyinstaller-devkit-2.7.5-1-x64.exe). Use default options for installation.

2. Run the ridk install step on the last stage of the installation wizard. This is needed for installing gems with native extensions. You can find additional information regarding this in the RubyInstaller Documentation. From the options choose MSYS2 and MINGW development tool chain (**press 3 and continue**).

<!-- See a guide on Jekyll on Windows [here](https://jekyllrb.com/docs/installation/windows/).  
Make sure to download and install the `Ruby+Devkit 2.7.5-1` that is suitable for your system. -->


## Serving the page locally

Make these local changes that you shouldn't commit or push.
First uncomment the first line of `_config.yml` (second line for windows platform) and comment the third line so that it looks like this:
```yml
theme: just-the-docs
# theme: "just-the-docs" # quotation marks are required for windows platform
# remote_theme: pmarsceill/just-the-docs
```

Go to project folder and install the gems for this theme in your local profile
```bash
gem install --user-install bundler jekyll
```
Check if Jekyll has been installed properly 
    
    jekyll -v

Install required **just-the-docs** themes.
```bash
bundle install --path vendor/bundle
```

Then use this command to serve the page:  
```bash
bundle exec jekyll serve
```

If there is a port issue
```bash
`bind': Permission denied - bind(2) for 127.0.0.1:4000 (Errno::EACCES)
```

Please change the port with following command
```bash
bundle exec jekyll serve --port 4001 (or any other port)
```