<?php
namespace Beluga\PluginManager;

use DigitalTechnologia\Beluga\ActionHooks;

defined('ABSPATH') || wp_die(__('You can\'t access this page', 'wsmgs'));

class Plugin {
    public function __construct() {
        $this->initiateClasses();
    }

    /**
     * Method initiateClasses
     * Initialize all the classes for this plugin
     *
     * @return void
     */
    public function initiateClasses() {
        new ActionHooks();
    }
}