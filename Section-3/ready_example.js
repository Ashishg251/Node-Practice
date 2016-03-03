var delayedModule = require("./delayed_module");

delayedModule.on("ready", function() {
  console.log(delayedModule.message);
});
