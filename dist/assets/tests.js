'use strict';

define('dummy/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/trim-markdown.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'helpers/trim-markdown.js should pass ESLint\n\n1:49 - Extra semicolon. (semi)\n3:29 - Missing space before function parentheses. (space-before-function-paren)\n16:36 - Extra semicolon. (semi)');
  });

  QUnit.test('initializers/showdown.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'initializers/showdown.js should pass ESLint\n\n1:32 - Extra semicolon. (semi)');
  });

  QUnit.test('pods/components/story-pagination/component.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'pods/components/story-pagination/component.js should pass ESLint\n\n1:41 - Extra semicolon. (semi)\n2:32 - Extra semicolon. (semi)\n5:3 - Missing space after key \'currentPage\'. (key-spacing)\n6:3 - Missing space after key \'pages\'. (key-spacing)\n9:3 - Extra semicolon. (semi)');
  });

  QUnit.test('pods/components/x-block/component.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'pods/components/x-block/component.js should pass ESLint\n\n1:41 - Extra semicolon. (semi)\n2:10 - \'computed\' is defined but never used. (no-unused-vars)\n5:32 - Extra semicolon. (semi)\n13:5 - Extra space after key \'0\'. (key-spacing)\n14:5 - Extra space after key \'500\'. (key-spacing)\n19:3 - Missing space after key \'classNames\'. (key-spacing)\n21:3 - Extra semicolon. (semi)');
  });

  QUnit.test('pods/components/x-ember-forwarding/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/x-ember-forwarding/component.js should pass ESLint\n\n');
  });

  QUnit.test('pods/components/y-ember-forwarding/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/y-ember-forwarding/component.js should pass ESLint\n\n');
  });

  QUnit.test('pods/index/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'pods/index/controller.js should pass ESLint\n\n34:5 - \'$\' is not defined. (no-undef)');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
});
define('dummy/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  var run = Ember.run;
  function destroyApp(application) {
    run(application, 'destroy');
  }
});
define('dummy/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'dummy/tests/helpers/start-app', 'dummy/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };

  var resolve = Ember.RSVP.resolve;
});
define('dummy/tests/helpers/resolver', ['exports', 'dummy/resolver', 'dummy/config/environment'], function (exports, _resolver, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var resolver = _resolver.default.create();

  resolver.namespace = {
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix
  };

  exports.default = resolver;
});
define('dummy/tests/helpers/start-app', ['exports', 'dummy/app', 'dummy/config/environment'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  var merge = Ember.merge;
  var run = Ember.run;
  function startApp(attrs) {
    var attributes = merge({}, _environment.default.APP);
    attributes = merge(attributes, attrs); // use defaults, but you can override;

    return run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('dummy/tests/integration/components/e-q-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('e-q', 'Integration | Component | e q', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "uf6fJmEL",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"e-q\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "AnofgPQi",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"e-q\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('dummy/tests/test-helper', ['dummy/tests/helpers/resolver', 'ember-qunit', 'ember-cli-qunit'], function (_resolver, _emberQunit, _emberCliQunit) {
  'use strict';

  (0, _emberQunit.setResolver)(_resolver.default);
  (0, _emberCliQunit.start)();
});
define('dummy/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/e-q-test.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'integration/components/e-q-test.js should pass ESLint\n\n1:55 - Extra semicolon. (semi)\n2:45 - Extra semicolon. (semi)\n5:3 - Missing space after key \'integration\'. (key-spacing)\n6:3 - Extra semicolon. (semi)\n8:28 - Missing space before function parentheses. (space-before-function-paren)\n12:28 - Extra semicolon. (semi)\n14:43 - Extra semicolon. (semi)\n21:5 - Extra semicolon. (semi)\n23:62 - Extra semicolon. (semi)\n24:3 - Extra semicolon. (semi)');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
});
require('dummy/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
