var fs = require('fs');
var login = require("facebook-chat-api");
var argv = require('yargs')
    .usage('Auto-respond to Facebook messages.\n')
    .env('FB_AUTORESPOND')
    .describe('response', 'The response to send on new messages')
    .describe('email', 'The email address to login with')
    .describe('password', 'The password to authenticate with')
    .describe('num_threads', 'How many threads do you expect will to have unread messages')
    .demand('email')
    .demand('response')
    .argv;
if (!argv.password) {
  argv.password = require('readline-sync').question('Password? ', {
    hideEchoBack: true
  });
}
if(!argv.num_threads) {
  argv.num_threads = 100;
}

login(argv, function callback (err, api) {
  if(err) {
    return console.error(err);
  }

  api.setOptions({
      forceLogin: true,
      logLevel: "warn"
  });

  api.getThreadList(0,argv.num_threads, 'inbox', function callback(err,arr) {
    for(i = 0; i < argv.num_threads; i++) {
      thread = arr[i];
      if(!thread.isArchived && thread.unreadCount != 0 && 
        thread.snippet != argv.response) {
        // send an auto response to this thread
        api.sendMessage(argv.response, thread.threadID);
        console.log('Sending autoresponse to ', thread.snippet);
      }
    }
  });
});
