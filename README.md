# fbautorespond

A simple script to autoreply to Facebook unread facebook messages.

## Description

I don't use Facebook but many of my friends do.  I wanted a way to let my friends know that I would not receive their messages unless they sent them some other way.

Unlike [jkp/fbautorespond](https://github.com/jkp/fbautorespond/archive/master.zip), this script doesn't need to be continously running (as it's not listening on fb messages). It simply replies to all unread messages in facebook with your given reply. I recommend running it as a cronjob.

## Usage

To configure the the script to run locally:

- Ensure you have `node.js` installed on your host machine.
- Checkout the repository or download the [source](https://github.com/KBaichoo/fbautoreply/archive/master.zip)
- From the project directory run `npm install`.

Then, command line usage is as follows:

```
$ node fbautoreply.js
Auto-respond to Facebook messages.

Options:
  --response  The response to send on new messages                    [required]
  --email     The email address to login with                         [required]
  --password  The password to authenticate with
  --num_threads The number of threads with unread messages you expect [defaults 100]
```

### Two-factor login

Two-factor login is not implemented right now though it [is supported](https://github.com/Schmavery/facebook-chat-api/blob/master/DOCS.md#login) by the underlying library I use to interact with Facebook so it shouldn't be too hard to handle it if needed.  Feel free to submit a pull-request if you have the time to make it work.

## Credits
- Based off of https://github.com/jkp/fbautorespond.
- All the heavy lifting is done using the [facebook-chat-api](https://github.com/Schmavery/facebook-chat-api) module.
