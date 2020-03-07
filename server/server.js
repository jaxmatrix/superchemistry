// Testing the distribution files

const express = require("express");
const appx = express();

appx.use(express.static('../dist/SuperChemistry'))

var server = appx.listen(8081, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Super Chemistry is running on http://%s:%s", host, port);
});

// Startting the desktop Electron applications

const electron = require('electron');

const { app, BrowserWindow } = require('electron')

function createWindow () {
  let win = new BrowserWindow({
    width: 1200,
    height: 720,
    webPreferences: {
      nodeIntegration: true
    },
    frame: false,
  })

  // and load the index.html of the app

  win.loadURL('httP://localhost:8081');

  //win.webContents.openDevTools();
}

app.whenReady().then(createWindow)
