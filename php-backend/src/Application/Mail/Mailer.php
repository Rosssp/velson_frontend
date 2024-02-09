<?php

namespace App\Application\Mail;

use PHPMailer\PHPMailer\PHPMailer;

class Mailer
{
    protected PHPMailer $client;
    protected string $recipient = 'admin@welson.ru';
    protected array $smtp = [
        'Host'=> 'smtp.welson.ru',
        'SMTPAuth' => true,
        'SMTPSecure' => 'tls',
        'Username' => 'admin.welson.ru',
        'Password' => 'somepassword',
        'Port' => ''
    ];

    /**
     * @throws \PHPMailer\PHPMailer\Exception
     */
    public function __construct(array $mailData, array $smtp = [])
    {
        $this->client = new PHPMailer();
        $this->smtp = array_merge($this->smtp, $smtp);

        $this->client->setFrom($mailData['from']);
        $this->client->addAddress($this->recipient);
        $this->client->Subject = $mailData['subject'];
        $this->client->Body = $mailData['body'];
    }

    /**
     * @throws \PHPMailer\PHPMailer\Exception
     */
    public function sendMail()
    {
        $this->configureSmtp();
        $this->client->send();
    }

    protected function configureSmtp(): void
    {
        $this->client->isSMTP();
        foreach ($this->smtp as $param => $value) {
            $this->client->$param = $value;
        }
    }
}
