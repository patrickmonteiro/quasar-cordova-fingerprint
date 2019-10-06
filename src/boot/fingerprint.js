export default async ({ Vue }) => {
  Vue.prototype.$fingerPrint = (text) => {
    return new Promise((resolve, reject) => {
      window.Fingerprint.isAvailable((suc) => {
        window.Fingerprint.show({
          clientId: 'fingerprintId',
          clientSecret: 'o7aoOMYUbyxaD23oFAnJ',
          disableBackup: true
        }, (suc) => {
          resolve(suc)
        }, (err) => {
          reject(err)
        })
      }, () => {
        reject(false)
      })
    })
  }
}
