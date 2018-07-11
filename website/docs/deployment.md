# Deployment

### Guides for various platforms
* [Docker](#docker)
* [Heroku](#heroku)
* [Ubuntu](#ubuntu)

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

## Ubuntu 
It's similar to [Ubuntu development guide](development.html#ubuntu). 

1. Just a few additions before setup database (step 15):
```
cp .env.production.sample .env
```

2. Generate secret key:
```
rake secret
```

3. Insert into `.env` file generated secret and adjust database credentials from .env file if needed.

4. Then setup database:
```
RAILS_ENV=production ./bin/rake db:setup
```

5. To precompile assets:
```
RAILS_ENV=production ./bin/rake assets:precompile
```

6. To launch server:
```
RAILS_ENV=production ./bin/rails s
```

Visit your server at port 3000 to view the project!
