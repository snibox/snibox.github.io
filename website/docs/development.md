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
1. Setup [macOS environment](/docs/setup-environment.html#macos).

2. Setup database: 
``` 
./bin/rake db:setup
```

3. Precompile assets:
```
./bin/rake assets:precompile
```

4. Launch development server:
```
./bin/rails s
```

To launch webpack-dev-sever:
```
./bin/webpack-dev-server
```

Visit ```http://localhost:3000/``` to view the project!

## Ubuntu
1. Setup [Ubuntu environment](/docs/setup-environment.html#ubuntu).

2. Create postgres role if you don't have one:
```
sudo -u postgres createuser --superuser <paste-your-username>
```

3. Setup database:
``` 
./bin/rake db:setup
```

4. Compile frontend packs:
```
./bin/rake assets:precompile
```

5. Launch development server:
```
./bin/rails s
```

To launch webpack-dev-server:
```
./bin/webpack-dev-server
```

Visit ```http://localhost:3000/``` to view the project!

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

Visit ```http://localhost:3000/``` to view the project!
