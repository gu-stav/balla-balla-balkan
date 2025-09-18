import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'puzuao21',
    dataset: 'production',
  },
  deployment: {
    appId: 'w5ywscdpp30q37yqzcoeme0v',
    autoUpdates: true,
  }
})
