const {app, BrowserWindow, ipcMain} = require('electron');
const path = require('path');
let win

function createWindow () {
     win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences:{
        contextIsolation:false,
        nodeIntegration: true,
        enableRemoteModule: true,
        preload: path.join(__dirname, 'preload.js')
      },
      toolbar:"hidden",
      // frame: false
    })

    if(app.isPackaged){
        win.loadFile(path.join(__dirname, "../build/index.html"))
    }else{
        win.loadURL('http://localhost:3000')
    }
}
ipcMain.on('newsLink', (e,msg)=>{
  const child = new BrowserWindow({
    parent:win,
    width: 800,
    height: 600,
    webPreferences:{
      nodeIntegration: true,
      contextIsolation: false,
    },
  })

  child.loadURL(msg)
  child.show()
})
app.whenReady().then(() => {
    createWindow()
  
    app.on('activate', function () {
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})