import express from "express";

import { app, BrowserWindow , ipcMain } from 'electron';
import * as path from 'path';
import * as url from 'url';

let win: BrowserWindow;

app.on('ready', createWindow);

app.on('activate', ()=> {
  if (win == null ){
    createWindow()
  }
});

function createWindow() {
  win = new BrowserWindow({
    frame: false,
    height:720,
    width: 1200,
  });

  win.loadURL('http://localhost:8081');
}
