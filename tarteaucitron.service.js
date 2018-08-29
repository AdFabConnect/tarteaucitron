tarteaucitron.services.juicer = {
    "key": "juicer",
    "type": "social",
    "name": "Juicer Social Wall",
    "uri": "https://www.juicer.io/",
    "needConsent": true,
    "cookies": [],
    "js": function () {
        "use strict";
        tarteaucitron.fallback(['juicer'], function (e) {
            return '<div class="juicer-test"><ul class="juicer-feed" data-feed-id="' + e.getAttribute('data-user-id') + '"></ul></div>';
        });
    },
    "fallback": function () {
        "use strict";
        var id = 'juicer';
        tarteaucitron.fallback(['juicer'], tarteaucitron.engage(id));
    }
}