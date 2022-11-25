<?php

/**
 * Plugin Name:       Beluga API Manager for front-end
 * Plugin URI:        http://digitaltechnologia.com/
 * Description:       Beluga API Manager for front-end
 * Version:           1.0.0
 * Requires at least: 5.4
 * Requires PHP:      7.4
 * Author:            DigitalTechnologia | AR. Arif
 * Author URI:        https://www.linkedin.com/in/arifur-rahman-arif-51222a1b8/
 * Text Domain:       beluga
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 */

/* if accessed directly exit from plugin */
defined('ABSPATH') || wp_die(__('You can\'t access this page', 'wsmgs'));

require_once trailingslashit(plugin_dir_path(__FILE__)) . 'vendor/autoload.php';
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->safeLoad();

if (!defined('BELUGA_TEXT_DOMAIN')) {
    define('BELUGA_TEXT_DOMAIN', 'wsmgs');
}

if (!defined('BELUGA_BASE_PATH')) {
    define('BELUGA_BASE_PATH', plugin_dir_path(__FILE__));
}

if (!defined('BELUGA_BASE_URL')) {
    define('BELUGA_BASE_URL', plugin_dir_url(__FILE__));
}

if (!defined('BELUGA_PlUGIN_NAME')) {
    define('BELUGA_PlUGIN_NAME', 'Stock Sync with Google Sheet for WooCommerce');
}

if (!defined('BELUGA_MODE')) {
    define('BELUGA_MODE', isset($_ENV['MODE']) ? $_ENV['MODE'] : 'production');
}

if (!defined('BELUGA_VERSION')) {
    define(
        'BELUGA_VERSION',
        BELUGA_MODE === 'development'
        ? time()
        : (isset($_ENV['VERSION'])
            ? $_ENV['VERSION']
            : '1.0.0')
    );
}

final class Beluga {

    /**
     * @var string
     */
    public $noticeMessage = 'This is a notice message';

    /**
     * @return null
     */
    public function __construct() {

        if ($this->versionCheck() == 'version_low') {
            return;
        }

        if (!$this->pluginsCheck()) {
            return;
        }

        $this->initiatePlugin();
    }

    /**
     * Initialize the plugin after all check is complete
     * @return null
     */
    public function initiatePlugin() {
        // Include the base file of this plugin
        require_once BELUGA_BASE_PATH . 'includes/plugin.php';

        new \Beluga\PluginManager\Plugin();
    }

    public function pluginsCheck() {
        require_once ABSPATH . 'wp-admin/includes/plugin.php';

        // if (!is_plugin_active(plugin_basename(__FILE__)) || !class_exists('WooCommerce')) {
        //     $this->noticeMessage = "<b>" . BELUGA_PlUGIN_NAME . "</b>" . "&nbsp" . __("deactivated because <b>WooCommerce</b> plugin is not active.", BELUGA_TEXT_DOMAIN);
        //     $this->deactivatePlugin();
        //     return false;
        // }

        return true;
    }

    /**
     * @return null
     */
    public function versionCheck() {

        if (version_compare(PHP_VERSION, '5.4') < 0) {

            if (is_plugin_active(plugin_basename(__FILE__))) {

                $this->noticeMessage = "<b>" . BELUGA_PlUGIN_NAME . "</b>" . "&nbsp" . __("cannot be activated. Requires at least PHP 5.6. Plugin automatically deactivated.", BELUGA_TEXT_DOMAIN);
                $this->deactivatePlugin();
                return 'version_low';
            }
        }
    }

    /**
     * @param  $noticeMessage
     * @return null
     */
    public function deactivatePlugin() {

        deactivate_plugins(plugin_basename(__FILE__));

        add_action('admin_notices', function () {
            printf('<div class="notice notice-error is-dismissible"><p>%s</p></div>', $this->noticeMessage);
            return;
        });
    }

}

if (!class_exists('Beluga')) {
    return;
}

add_action('plugins_loaded', 'pluginLoader');

if (!function_exists('pluginLoader')) {
    function pluginLoader() {
        return new Beluga();
    }
}

register_activation_hook(__FILE__, function () {
    // if (!get_option('wsmgsToken')) {
    //     add_option('wsmgsToken', wp_generate_uuid4());
    // }

    // add_option('wsmgsRedirect', true);
    // update_option('configureMode', true);
});