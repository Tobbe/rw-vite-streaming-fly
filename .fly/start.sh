#!/bin/sh

set -ex

if [ -n $MIGRATE_ON_BOOT ]; then
  $(dirname $0)/migrate.sh
fi

# npx rw-server --port ${PORT} $@
node node_modules/@redwoodjs/api-server/dist/index.js api &
sleep 10
yarn rw-serve-fe
