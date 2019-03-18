#
# To be use as an npm script
#   

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd )"

DIRECTORY=$DIR/../dist

if [ -d "$DIRECTORY" ]; then
  rm -r $DIRECTORY
fi