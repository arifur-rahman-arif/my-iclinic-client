<?php
namespace DigitalTechnologia\Beluga\API\Endpoints;

use DigitalTechnologia\Beluga\API\EndpointInterface;
use WP_REST_Request;

class SubmitContactForm implements EndpointInterface {
    /**
     * Return the request method.
     *
     * @return string
     */
    public function method() {
        return \WP_REST_Server::CREATABLE;
    }

    /**
     * Return endpoint name.
     *
     * Endpoint constructor.
     */
    public function endpoint(): string {
        return 'submit-contact-form';
    }

    /**
     * Endpoint callback function.
     *
     * @param WP_REST_Request $request
     */
    public function callback(WP_REST_Request $request) {
        try {
            $requestBody = $request->get_body();
            $requestBody = json_decode($requestBody);

            $this->sendEmail($requestBody);
        } catch (\Throwable$error) {
            wp_send_json_error([
                'data'    => null,
                'status'  => 'error',
                'message' => esc_html__($error->getMessage(), BELUGA_TEXT_DOMAIN)
            ], $error->getCode());

            wp_die();
        }
    }

    /**
     * Permission callback for individual endpoint.
     *
     * @return mixed
     */
    public function permissionCallback(): bool {
        return true;
    }

    /**
     * @param object $data
     */
    public function sendEmail(object $data) {
        $to = 'team@belugaswimmingacademy.com';
        $subject = 'Form submission from ' . $data->name . '';
        $profferedPhone = $data->profferedFormOfContact->phone == 1 ? 'Yes' : 'No';
        $profferedEmail = $data->profferedFormOfContact->email == 1 ? 'Yes' : 'No';
        $profferedText = $data->profferedFormOfContact->text == 1 ? 'Yes' : 'No';

        $message = '
            <h3>Submitted form data:</h3>
            <p><strong>Name:</strong> ' . $data->email . '</p>
            <p><strong>Phone:</strong> ' . $data->phone . '</p>
            <p><strong>Email:</strong> ' . $data->email . '</p>
            <p><strong>Description:</strong> ' . $data->description . '</p>
            <h3>Preferred form of contact:</h3>
            <p><strong>Phone:</strong> ' . $profferedPhone . '</p>
            <p><strong>Email:</strong> ' . $profferedEmail . '</p>
            <p><strong>Text:</strong> ' . $profferedText . '</p>
        ';
        $headers = ['Content-Type: text/html; charset=UTF-8'];

        if (wp_mail($to, $subject, $message, $headers)) {
            wp_send_json_success([
                'status'  => 'success',
                'message' => esc_html__('Form submitted successfully', BELUGA_TEXT_DOMAIN)
            ]);

            wp_die();
        } else {
            throw new \Exception("Error Processing Request", 500);
        }
    }
}