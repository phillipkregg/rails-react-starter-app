# This is a basic template for setting up React with Rails and Webpacker

It utilizes the structure created with `rails new myapp --webpack=react`

## When running into problems...

Try running the webpack server:

    ./bin/webpack-dev-server

There are times where a node process will be preventing the rails s server from compiling webpack.

`killall -9 node` will kill all node processes that are running and may fix your webpack issue.

Also try
rails `webpacker:clobber` or `rails webpacker:clean`
along with
`rails webpacker:compile`

This will destroy and recompile your webpack assets.

If all else fails

    rm -rf node_modules

To destroy all node modules, then run

    yarn

To recreate your node packages.
