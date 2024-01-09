const NotificationCenter = require('node-notifier/notifiers/notificationcenter');
new NotificationCenter(options).notify();

const NotifySend = require('node-notifier/notifiers/notifysend');
new NotifySend(options).notify();

const WindowsToaster = require('node-notifier/notifiers/toaster');
new WindowsToaster(options).notify();

const Growl = require('node-notifier/notifiers/growl');
new Growl(options).notify();

const WindowsBalloon = require('node-notifier/notifiers/balloon');
new WindowsBalloon(options).notify();
