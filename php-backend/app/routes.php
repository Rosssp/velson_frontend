<?php

declare(strict_types=1);

use App\Application\Actions\User\ListUsersAction;
use App\Application\Actions\User\ViewUserAction;
use App\Application\Mail\Mailer;
use App\Application\Settings\SettingsInterface;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\App;
use Slim\Interfaces\RouteCollectorProxyInterface as Group;
use Respect\Validation\Validator as Validator;

return function (App $app) {
    $app->options('/{routes:.*}', function (Request $request, Response $response) {
        // CORS Pre-Flight OPTIONS Request Handler
        return $response;
    });

    $app->get('/', function (Request $request, Response $response) use ($app) {
        $response->getBody()
            ->write(json_encode(array(
                'message' => 'Backend is reachable and says hello!',
            )));
        return $response->withHeader('content-type', 'application/json');
    });

    $app->post('/sendmail', function (Request $request, Response $response) use ($app) {
        $mail = $request->getParsedBody();

        $clearSender = filter_var($mail['from'], FILTER_SANITIZE_EMAIL);
        $validSender = Validator::email()->validate($clearSender);
        $clearSubject = htmlspecialchars($mail['subject']);
        $clearBody = htmlspecialchars($mail['body']);

        if (!$validSender) {
            $response->getBody()->write(json_encode(array('result' => 'error', 'error' => 'Invalid sender email address')));
            return $response
                ->withHeader('content-type', 'application/json')
                ->withStatus(403);
        }

        $mailData = array(
            'from' => $clearSender,
            'subject' => $clearSubject,
            'body' => $clearBody
        );

        $container = $app->getContainer();
        $settings = $container->get(SettingsInterface::class);
        $smtp = $settings->get('mailer');

        $mailer = new Mailer($mailData, $smtp);
        try {
            $mailer->sendMail();
        } catch (\PHPMailer\PHPMailer\Exception $error) {

            /**
             * Try send an email via standard mail() function if PHPMailer fails
             */
            if (mail($smtp['default_recipient'], $clearSubject, $clearBody, 'From: ' . $clearSender)) {
                $response->getBody()->write(json_encode(array('result' => 'success')));
                return $response
                    ->withHeader('content-type', 'application/json')
                    ->withStatus(200);
            }

            $response->getBody()->write(json_encode(array('result' => 'error', $error)));
            return $response
                ->withHeader('content-type', 'application/json')
                ->withStatus(500);
        }

        $response->getBody()->write(json_encode(array('result' => 'success')));
        return $response
            ->withHeader('content-type', 'application/json')
            ->withStatus(200);
    });
};
