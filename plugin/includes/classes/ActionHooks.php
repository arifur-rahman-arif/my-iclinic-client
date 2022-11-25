<?php
namespace DigitalTechnologia\Beluga;

use DigitalTechnologia\Beluga\API\ApiManager;

class ActionHooks {
    use ApiManager;

    public function __construct() {
        $this->restApiHooks();
    }

    public function restApiHooks() {
        add_action('rest_api_init', [$this, 'registerApiEndPoints']);
    }
}