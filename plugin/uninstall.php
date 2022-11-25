<?php

defined('WP_UNINSTALL_PLUGIN') || wp_die(__('You can\'t access this page', 'wsmgs'));

class BelugaUninstaller {
    public function __construct() {
        $this->deleteOptions();
    }

    /**
     * @return null
     */
    public function deleteOptions() {
        $savedOptions = [];

        if (count($savedOptions) < 1) {
            return;
        }

        foreach ($savedOptions as $option) {
            delete_option($option);
        }
    }
}

if (!class_exists('BelugaUninstaller')) {
    return;
}

new BelugaUninstaller();