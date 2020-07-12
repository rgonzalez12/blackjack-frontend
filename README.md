# blackjack-frontend

Simple Blackjack game created with JS and Rails. The scores and various game data is stored within the API which can be accessed at any time when the Rails server is running.

### Installing

Clone front-end and back-end repositories to chosen directory.

```
git clone git@github.com:rgonzalez12/blackjack-frontend.git
git clone git@github.com:rgonzalez12/blackjack-backend.git
```

Install gems and other dependencies.

```
bundle install
```

Create the database and add the information to blackjack-backend/config/database.yml.

Perform migrations and run seed data to get started.

```
rails db:create
rails db:migrate
rails db:seed
```

Start servers by cding into the directory:

1) blackjack-backend

```
rails s

```

2) blackjack-frontend

```
npx reload -b

```

Navigate to http://localhost:8080/ in browser and win all the money playing Blackjack!

## Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

### Pull Request Process

1.Ensure any install or build dependencies are removed before the end of the layer when doing a build.

2.Update the README.md with details of changes to the interface, this includes new environment variables, exposed ports, useful file locations and container parameters.

3.Increase the version numbers in any examples files and the README.md to the new version that this Pull Request would represent. The versioning scheme we use is SemVer.

4.You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

## License

This project is licensed under the MIT Open Source Public License.

## Back End

Back end is [here](https://github.com/rgonzalez12/blackjack-backend)