<?php

declare(strict_types=1);

use App\Application\Settings\Settings;
use App\Application\Settings\SettingsInterface;
use DI\ContainerBuilder;
use Monolog\Logger;

return function (ContainerBuilder $containerBuilder) {

    // Global Settings Object
    $containerBuilder->addDefinitions([
        SettingsInterface::class => function () {
            return new Settings([
                'displayErrorDetails' => false, // Should be set to false in production
                'logError'            => true,
                'logErrorDetails'     => false,
                'logger' => [
                    'name' => 'slim-app',
                    'path' => isset($_ENV['docker']) ? 'php://stdout' : __DIR__ . '/../logs/app.log',
                    'level' => Logger::DEBUG,
                ],
                'mailer' => [
                    'Host'=> 'smtp.welson.ru',
                    'SMTPAuth' => true,
                    'SMTPSecure' => 'tls',
                    'Username' => 'admin.welson.ru',
                    'Password' => 'somepassword',
                    'Port' => '',
                    'default_recipient' => 'admin.welson.ru'
                ],
            ]);
        }
    ]);
};
