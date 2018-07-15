# Deployment

### Guides for various platforms
* [Docker](#docker)
* [Heroku](#heroku)
* [macOS](#macos)
* [Ubuntu](#ubuntu)
* [Windows](#windows)

### Emails
Snibox uses [Mailgun](https://www.mailgun.com/) to send emails on production. You need them just for 'reset password' feature.
On Heroku you can install [mailgun:starter](https://elements.heroku.com/addons/mailgun) addon.
Otherwise follow steps below to setup them:
* Create account on [Mailgun](https://www.mailgun.com/)
* Fill `.env` file with `MAILGUN_*` variables from your account

## Docker
Docker deployment instructions available at special repository [snibox/snibox-docker](https://github.com/snibox/snibox-docker).

## Heroku
Click the button below to deploy project:

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/snibox/snibox)

## macOS
1. Setup [macOS environment](setup-environment.html#macos).

2. Follow steps ```2-7``` from [Ubuntu deployment guide](deployment.html#ubuntu).


## Ubuntu 
1. Setup [Ubuntu environment](setup-environment.html#ubuntu).

2. Copy ```.env``` file:
```
cp .env.production.sample .env
```

3. Generate secret key:
```
rake secret
```

4. Insert into `.env` file generated secret and adjust database credentials if needed.

5. Setup database:
```
RAILS_ENV=production ./bin/rake db:setup
```

6. Precompile assets:
```
RAILS_ENV=production ./bin/rake assets:precompile
```

7. Launch server:
```
RAILS_ENV=production ./bin/rails s
```

Visit your server at port `3000` to view the project!

> If you want to deploy with Nginx + Passenger then you can check this [guide from Gorails](https://gorails.com/deploy/ubuntu/18.04)

## Windows
1. Setup [Windows environment](setup-environment.html#windows).
2. Follow steps ```2-7``` from [Ubuntu deployment guide](deployment.html#ubuntu).
