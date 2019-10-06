<template>
  <q-page class="flex flex-center background-custom">
    <img alt="Quasar logo" class="block" width="350px" src="statics/fingerprint.png" @click="readFingerPrint()">
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  methods: {
    readFingerPrint () {
      this.$fingerPrint()
        .then((suc) => {
          console.log('Success', suc)
          this.alert('Fingerprint Success!')
        })
        .catch((err) => {
          console.log('Error', err)
          this.alert('Fingerprint Failed')
        })
    },
    alert (msg) {
      this.$q.dialog({
        title: 'FINGERPRINT',
        message: msg,
        color: 'white',
        class: 'bg-deep-purple-6 text-white'
      })
    }
  }
}
</script>

<style scoped>
.background-custom {
  background: #F4F4F4;
}
</style>
