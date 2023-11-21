/**
 * This file will automatically be loaded by webpack and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/latest/tutorial/process-model
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */

import './index.css';

console.log('👋 This message is being logged by "renderer.js", included via webpack');

import * as React from 'react';
import * as DOM from 'react-dom';

const TitleBar = () => {
  return <div style={{ height: 28, width: '100%' }}>Hello World</div>
}

const ActivityBar = () => {
  return <div style={{ height: '100%', width: 48 }}>Hello World</div>
}

const SideBar = () => {
  return <div style={{ height: '100%', width: 256 }}>Hello World</div>
}

const Content = () => {
  return <div style={{
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }}>Hello World</div>
}

const StatusBar = () => {
  return <div
    style={{
      height: 22,
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >Hello World</div>
}

// DOM.render(<TitleBar />, document.getElementById('workbench.part.titlebar'));
// DOM.render(<ActivityBar />, document.getElementById('workbench.part.activitybar'));
// DOM.render(<SideBar />, document.getElementById('workbench.part.sidebar'));
// DOM.render(<Content />, document.getElementById('workbench.part.content'));
// DOM.render(<StatusBar />, document.getElementById('workbench.part.statusbar'));

const parts: {
  part: () => JSX.Element,
  id: string
}[] = [
    {
      part: TitleBar,
      id: 'workbench.part.titlebar'
    },
    {
      part: ActivityBar,
      id: 'workbench.part.activitybar'
    },
    {
      part: SideBar,
      id: 'workbench.part.sidebar'
    },
    {
      part: Content,
      id: 'workbench.part.content'
    },
    {
      part: StatusBar,
      id: 'workbench.part.statusbar'
    }
  ]



const renderParts = () => {
  parts.forEach((part) => {
    DOM.render(React.createElement(part.part), document.getElementById(part.id));
  })

}

class DesktopMain {
  constructor() {
    console.log('desktop main')
    this.init()
  }

  init() {
    console.log('init')
  }

  async open(): Promise<void> {
    console.log('open')
    this.initServices()

    const workbench = new Workbench()
    this.registerListeners(workbench)
    const instantiationService = workbench.startup()

    this.#register(instantiationService.createInstance(class NativeWindow { }))
  }

  #register(arg0: any) {
    throw new Error('Method not implemented.');
  }

  async initServices() {
    console.log('initServices')
  }

  registerListeners(
    workbench: Workbench,
    storageService?: any,
  ) {
    console.log('registerListeners')
  }
}

class Workbench {
  startup() {
    return new InstantiationService()
  }
  constructor() {
    console.log('workbench')
  }
}

class InstantiationService {
  createInstance(arg0: any) {
    return new NativeWindow()
  }
  constructor() {
    console.log('instantiation service')
  }
}

class NativeWindow {
  constructor() {
    console.log('native window')
  }
}

const main = () => {
  const desktopMain = new DesktopMain()
  desktopMain.open()
}

export default main

