#!/usr/local/bin/node

var exec = require('child_process').exec;
var command = '../brackets/tools/setup_for_hacking.sh';
var path = '/Volumes/Developer/src/github/scratch/brackets-shell/xcodebuild/Release/Brackets.app';

exec(command + ' ' + path, function(error, stdout, stderr) {
  stdout && console.log(stdout);
  stderr && console.warn(stderr);
  error && console.error(error);
});