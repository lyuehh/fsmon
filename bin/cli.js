#!/usr/bin/env node

var gaze = require('gaze');

var arg = process.argv[2];

if (arg === '-h' || !arg) {
    console.log('Usage: fsmon * or fsmon *.js');
    process.exit(0);
}

gaze(arg, function(err, watcher) {
    if (err) {
        throw err;
    }
    console.log('watching...');
    console.log(this.watched());

    watcher.on('changed', function(filepath) {
        console.log('Changed : ' + filepath);
    });

    this.on('added', function(filepath) {
        console.log('Added   : ' + filepath);
    });

    this.on('deleted', function(filepath) {
        console.log('Deleted : ' + filepath);
    });
    this.on('renamed', function(newpath, oldpath) {
        console.log('Renamed : ' + 'from ' + oldpath + ' to ' + newpath);
    });

});
