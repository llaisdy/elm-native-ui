const _kyasu1$elm_native_ui$Native_NativeUi_Linking = function () {
  const { Linking } = require('react-native');
  const unit = { ctor: "_Tuple0" };

  function openUrl(url) {
    return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
      Linking.openURL(url)
        .then(function() {
          return callback(_elm_lang$core$Native_Scheduler.succeed(unit));
        })
        .catch(failWithError(callback));
    });
  }

  function failWithError(callback) {
    return function(e) {
      const errorValue = { ctor: 'Error', _0: e.message };
      return callback(_elm_lang$core$Native_Scheduler.fail(errorValue));
    };
  }

  return {
    openUrl: openUrl
  };
}();
