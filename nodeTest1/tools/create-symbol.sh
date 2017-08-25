#!/bin/bash

export LD_LIBRARY_PATH=/opt/glibc-2.14/lib

dst="$1.sym"
$(./tools/dump_syms $1 > $dst)
line=`head -1 $dst`
echo $line

OLD_IFS=$IFS
IFS=" "
arr=($line)
IFS=$OLD_IFS

dirname="tools/symbols/$1/${arr[3]}"

mkdir -p $dirname
mv $dst $dirname

