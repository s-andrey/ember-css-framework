"use strict";



define('ember-css-framework/app', ['exports', 'ember-css-framework/resolver', 'ember-load-initializers', 'ember-css-framework/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('ember-css-framework/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
define('ember-css-framework/helpers/app-version', ['exports', 'ember-css-framework/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;

    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
define('ember-css-framework/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('ember-css-framework/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('ember-css-framework/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'ember-css-framework/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  let name, version;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('ember-css-framework/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('ember-css-framework/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('ember-css-framework/initializers/export-application-global', ['exports', 'ember-css-framework/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define("ember-css-framework/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('ember-css-framework/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('ember-css-framework/router', ['exports', 'ember-css-framework/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {});

  exports.default = Router;
});
define('ember-css-framework/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define("ember-css-framework/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "VGNUgqTS", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"ui attached stackable menu\"],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"ui container\"],[8],[0,\"\\n    \"],[6,\"a\"],[10,\"class\",\"item disabled\"],[8],[0,\"\\n      \"],[6,\"i\"],[10,\"class\",\"home icon\"],[8],[9],[0,\" Home\\n    \"],[9],[0,\"\\n    \"],[6,\"a\"],[10,\"class\",\"item disabled\"],[8],[0,\"\\n      \"],[6,\"i\"],[10,\"class\",\"grid layout icon\"],[8],[9],[0,\" Browse\\n    \"],[9],[0,\"\\n    \"],[6,\"a\"],[10,\"class\",\"item disabled\"],[8],[0,\"\\n      \"],[6,\"i\"],[10,\"class\",\"mail icon\"],[8],[9],[0,\" Messages\\n    \"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"ui simple dropdown item\"],[8],[0,\"\\n      More\\n      \"],[6,\"i\"],[10,\"class\",\"dropdown icon\"],[8],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"menu\"],[8],[0,\"\\n        \"],[6,\"a\"],[10,\"class\",\"item disabled\"],[8],[6,\"i\"],[10,\"class\",\"edit icon\"],[8],[9],[0,\" Edit Profile\"],[9],[0,\"\\n        \"],[6,\"a\"],[10,\"class\",\"item disabled\"],[8],[6,\"i\"],[10,\"class\",\"globe icon\"],[8],[9],[0,\" Choose Language\"],[9],[0,\"\\n        \"],[6,\"a\"],[10,\"class\",\"item disabled\"],[8],[6,\"i\"],[10,\"class\",\"settings icon\"],[8],[9],[0,\" Account Settings\"],[9],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[6,\"table\"],[10,\"class\",\"ui celled table\"],[8],[0,\"\\n  \"],[6,\"thead\"],[8],[0,\"\\n    \"],[6,\"tr\"],[8],[6,\"th\"],[8],[0,\"Name\"],[9],[0,\"\\n    \"],[6,\"th\"],[8],[0,\"Age\"],[9],[0,\"\\n    \"],[6,\"th\"],[8],[0,\"Job\"],[9],[0,\"\\n  \"],[9],[9],[0,\"\\n  \"],[6,\"tbody\"],[8],[0,\"\\n    \"],[6,\"tr\"],[8],[0,\"\\n      \"],[6,\"td\"],[10,\"data-label\",\"Name\"],[8],[0,\"James\"],[9],[0,\"\\n      \"],[6,\"td\"],[10,\"data-label\",\"Age\"],[8],[0,\"24\"],[9],[0,\"\\n      \"],[6,\"td\"],[10,\"data-label\",\"Job\"],[8],[0,\"Engineer\"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[6,\"tr\"],[8],[0,\"\\n      \"],[6,\"td\"],[10,\"data-label\",\"Name\"],[8],[0,\"Jill\"],[9],[0,\"\\n      \"],[6,\"td\"],[10,\"data-label\",\"Age\"],[8],[0,\"26\"],[9],[0,\"\\n      \"],[6,\"td\"],[10,\"data-label\",\"Job\"],[8],[0,\"Engineer\"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[6,\"tr\"],[8],[0,\"\\n      \"],[6,\"td\"],[10,\"data-label\",\"Name\"],[8],[0,\"Elyse\"],[9],[0,\"\\n      \"],[6,\"td\"],[10,\"data-label\",\"Age\"],[8],[0,\"24\"],[9],[0,\"\\n      \"],[6,\"td\"],[10,\"data-label\",\"Job\"],[8],[0,\"Designer\"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[6,\"div\"],[10,\"class\",\"ui center aligned segment\"],[8],[0,\"\\n  TEST page for lab\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-css-framework/templates/application.hbs" } });
});


define('ember-css-framework/config/environment', [], function() {
  var prefix = 'ember-css-framework';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("ember-css-framework/app")["default"].create({"name":"ember-css-framework","version":"0.0.0+f2bdd064"});
}
//# sourceMappingURL=ember-css-framework.map
