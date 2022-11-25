<?php
namespace DigitalTechnologia\Beluga\API;

use DigitalTechnologia\Beluga\API\Endpoints\SubmitContactForm;

trait ApiManager {
    /**
     * API namespace
     *
     * @var string
     */
    private $namespace = 'digitaltechnologia/v1';

    /**
     * Route for the endpoint.
     *
     * @var string
     */
    protected $endpoints = [];

    /**
     * @return null
     */
    public function registerApiEndPoints() {
        header("Access-Control-Allow-Origin: *");

        // Endpoint url '/wp-json/digitaltechnologia/v1/submit-contact-form'
        $this->endpoints[] = new SubmitContactForm();

        foreach ($this->endpoints as $endpoint) {
            register_rest_route(
                $this->namespace,
                $endpoint->endpoint(),
                [
                    'methods'             => $endpoint->method(),
                    'callback'            => [$endpoint, 'callback'],
                    'permission_callback' => [$endpoint, 'permissionCallback']
                ]
            );
        }
    }
}