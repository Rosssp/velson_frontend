<h3>PHP Backend for Welson app</h3>

<h4>Build</h4>

Run `composer install` inside backend directory to intall dependencies. If you don't have Composer on local machine, try Docker image:
```
docker run --rm --interactive --tty --volume $PWD:/app composer install
```

<h4>Deploy</h4>

Simply start docker container in `php-backend` directory via `docker-compose up -d`.
Application will be reachable on [http://localhost:8080](http://localhost:8080).

<h4>Mailer</h4>

Application accepts requests on `POST /sendmail` endpoint. Mail data <strong>must</strong> be send via HTML form and
must contain three parameters as following:

* `from` - sender email
* `subject` - mail subject
* `body` - mail body

Application will try to send email via PHPMailer library with configured SMTP server, which is the best option.
SMTP configuration is defined in `php-backend/app/settings.php` in 'mailer' section. 

As a fallback option standard function mail() is used automatically, but it has restrictions and vulnerabilities.

Response is always a JSON object with 'result' key. Successful request does not contain any response message 
other than `"result":"success"`.
