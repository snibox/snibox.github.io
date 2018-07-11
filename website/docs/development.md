# Development
### Guides for various platforms
* [macOS](#macos)
* [Ubuntu](#ubuntu)
* [Vagrant](#vagrant)

### Emails
Snibox uses [Mailtrap](https://mailtrap.io/) to send development emails. You need them just for 'reset password' feature.

Follow steps below to setup them:
* Create account on [Mailtrap](https://mailtrap.io/)
* Copy `.env.development.sample` to `.env`: 
```
cp .env.development.sample .env
```
* Fill `.env` file with `MAILTRAP_*` variables from your account

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

4. Clone the repository:
```
git clone https://github.com/snibox/snibox.git
```

5. Go to project root directory:
```
cd <path_to_project>
```

6. Set ruby local version to 2.5.1 if you have other global version:
```
rbenv local 2.5.1
```
or if you want 2.5.1 to be global:
```
rbenv global 2.5.1
```

7. Install bundler:
```
gem install bundler
```

8. Install dependencies:
```
bundle install
```

9. Install node packages:
```
yarn install --pure-lockfile
```

10. Compile frontend packs:
```
./bin/webpack
```

11. Setup database: 
``` 
./bin/rake db:setup
```

12. Launch development server:
```
./bin/rails s
```

To launch webpack-dev-sever:
```
./bin/webpack-dev-server
```

Visit http://localhost:3000/ to view the project!

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

7. Clone the repository:
```
git clone https://github.com/snibox/snibox.git
```

8. Go to project root directory:
```
cd <path_to_project>
```

9. Set ruby local version to 2.5.1 if you have other global version:
```
rbenv local 2.5.1
```
or if you want 2.5.1 to be global:
```
rbenv global 2.5.1
```

10. Install bundler:
```
gem install bundler
```

11. Install dependencies:
```
bundle install
```

12. Install node packages:
```
yarn install --pure-lockfile
```

13. Compile frontend packs:
```
./bin/webpack
```

14. Create postgres role if you don't have one:
```
sudo -u postgres createuser --superuser <paste-your-username>
```

15. Setup database:
``` 
./bin/rake db:setup
```

16. Launch development server:
```
./bin/rails s
```

To launch webpack-dev-server:
```
./bin/webpack-dev-server
```

Visit http://localhost:3000/ to view the project!

## Vagrant
1. Launch virtual machine:
```
vagrant up
```

2. SSH into the machine:
```
vagrant ssh
```

3. Go to the project directory:
```
cd /vagrant
```

4. Launch Rails server:
```
./bin/rails s
```

To launch Webpack dev server:
```
./bin/webpack-dev-server
```

Visit http://localhost:3000/ to view the project!