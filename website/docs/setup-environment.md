# Setup environment

## macOS
1. Install brew package manager [https://brew.sh/](https://brew.sh/).

2. Install needed packages: 
```
brew install rbenv ruby-build postgresql yarn
```

3. Install ruby 2.5.1:
```
rbenv install 2.5.1
```

4. Set ruby global version to 2.5.1:
```
rbenv global 2.5.1
```

5. Install ```bundler```:
```
gem install bundler
```

6. Clone the repository:
```
git clone https://github.com/snibox/snibox.git
```

7. Go to project root directory:
```
cd <path_to_project>
```

8. Install dependencies:
```
bundle install
```

## Ubuntu
1. Add node.js:
```
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
```

2. Add yarn:
```
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
```

3. Install needed packages: 
```
sudo apt-get update
sudo apt-get install -y build-essential git nodejs postgresql postgresql-contrib libpq-dev libssl-dev libreadline-dev zlib1g-dev yarn
```

4. Install [rbenv](https://github.com/rbenv/rbenv).

5. Install [ruby-build](https://github.com/rbenv/ruby-build).

6. Install ruby 2.5.1:
```
rbenv install 2.5.1
```

7. Set ruby global version to 2.5.1:
```
rbenv global 2.5.1
```

8. Install ```bundler```:
```
gem install bundler
```

9. Clone the repository:
```
git clone https://github.com/snibox/snibox.git
```

10. Go to project root directory:
```
cd <path_to_project>
```

11. Install dependencies:
```
bundle install
```

## Windows
1. Install Windows Subsystem for Linux [https://docs.microsoft.com/en-us/windows/wsl/install-win10](https://docs.microsoft.com/en-us/windows/wsl/install-win10).
> Use Ubuntu distribution for WSL.

2. Continue with [environment guide for Ubuntu](setup-environment.html#ubuntu).
