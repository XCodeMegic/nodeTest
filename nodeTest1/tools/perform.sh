#!/bin/bash
CURDIR=$(cd `dirname $0`; pwd)

$CURDIR/tools/minidump_stackwalk $1 $CURDIR/tools/symbols/ > $2
