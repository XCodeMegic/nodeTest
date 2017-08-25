#!/bin/bash
CURDIR=$(cd `dirname $0`; pwd)

export LD_LIBRARY_PATH=/opt/glibc-2.14/lib
$CURDIR/tools/minidump_stackwalk $1 $CURDIR/tools/symbols/ > $2
