# Quasar Cordova Fingerprint (quasar-cordova-fingerprint)

🔒👍📱 Quasar + Cordova Fingerprint Plugin

## Plugin Used

[cordova-plugin-fingerprint-aio](https://www.npmjs.com/package/cordova-plugin-fingerprint-aio)


## Install the dependencies
```bash
npm install
```

### Boot **fingerprint.js**

```javascript
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
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev -m cordova -T android
```

### Prints

<img src="https://github.com/patrickmonteiro/quasar-cordova-fingerprint/blob/master/docs/fp1.jpeg?raw=true&"  height="400">

<img src="https://github.com/patrickmonteiro/quasar-cordova-fingerprint/blob/master/docs/fp2.jpeg?raw=true" height="400">

<img src="https://github.com/patrickmonteiro/quasar-cordova-fingerprint/blob/master/docs/fp3.jpeg?raw=true" height="400">

<img src="https://github.com/patrickmonteiro/quasar-cordova-fingerprint/blob/master/docs/fp4.jpeg?raw=true" height="400">

<img src="https://github.com/patrickmonteiro/quasar-cordova-fingerprint/blob/master/docs/fp5.jpeg?raw=true" height="400">
