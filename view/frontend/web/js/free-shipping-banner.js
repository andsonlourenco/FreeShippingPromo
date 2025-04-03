define([
    'uiComponent'
], function(
    Component
) {
    'use strict';

    return Component.extend({
        defaults: {
            message: 'Free Shipping Message!',
            template: 'A7Prime_FreeShippingPromo/free-shipping-banner'
        },
        initialize: function() {
            this._super();

            console.log(this.message);
        }
    });
});
