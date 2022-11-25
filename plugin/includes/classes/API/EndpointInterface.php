<?php
namespace DigitalTechnologia\Beluga\API;

use WP_REST_Request;

interface EndpointInterface {
    /**
     * Method for the request.
     *
     * \WP_REST_Server::CREATABLE, \WP_REST_Server::READABLE, \WP_REST_Server::EDITABLE, \WP_REST_Server::DELETABLE,
     *
     * @return string
     */
    public function method();

    /**
     * Method endpoint
     *
     * Return endpoint name.
     *
     * @return string
     */
    public function endpoint(): string;

    /**
     * Endpoint callback function.
     *
     * @param  WP_REST_Request $request
     * @return string
     */
    public function callback(WP_REST_Request $request);

    /**
     * Permission callback for individual endpoint.
     *
     * @return bool
     */
    public function permissionCallback(): bool;
}