var app = require('app');  
var BrowserWindow = require('browser-window');
var mainWindow = null;
var testAddon = require('./addon.node');

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({width: 800, height: 600});
  // mainWindow.loadURL('file://' + __dirname + '/index.html');
  mainWindow.on('closed', function() {
    mainWindow = null;
		alert("End!");
  });
});