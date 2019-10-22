## Web application Laravel / Vue Js

This application is built using Laravel <a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/v/stable.svg" alt="Latest Stable Version"></a> and Vue most stable version when writing this) and have the following functionalities:

- User registration (name, email, password)
- User authentication (email & password)
- Password reset link sent through mail
- User logout
- Forms validations

This app also uses JWT for authentication and bootstrap CSS.

## Project dependencies

* PHP >= 7.2
* MySQL >= 5.7
* Composer
* npm

## Install

1. Clone this repo and Enter the project directory
```
git clone https://github.com/baedyl/LaravelVueAuth.git && cd LaravelVueAuth
```

2. Install Laravel dependencies
```
composer install
```

3. Copy the .env file from .env.example
```
cp .env.example .env
```
Then modify the DB_* values in .env with your DB config. Also set up the MAIL_USERNAME and MAIL_PASSWORD and set the encryption to 'tls', I used the credentials given by Mailtrap with a free account.

4. Generate Laravel application key
```
php artisan key:generate
```

5. Generate JWT key
```
php artisan jwt:secret
```

6. Run migration and populate table
```
php artisan migrate --seed
```

7. Install Node dependencies
```
npm install
```

8. Run the following command
```
npm run watch
```

9. If there are no errors, in another terminal run the following
```
php artisan serve
```
Make sure the port 8000 is not in use. You can use another port by adding
```--port PORT_NUMBER``` to the previous command.
Your application should be running at: http://127.0.0.1:8000

Testing credentials:
email: test@test.test
password: test

## License

The Laravel framework is open-source software licensed under the [MIT license](https://opensource.org/licenses/MIT).
