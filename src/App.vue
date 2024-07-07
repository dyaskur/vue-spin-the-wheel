<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-md-6">
        <h2> Canvas </h2>

        <SpinTheWheel
          style="width: 500px; max-width: 100%;"
          :verify="canvasVerify"
          :canvas="canvasOptions"
          :prizes="prizesCanvas"
          @rotateStart="onCanvasRotateStart"
          @rotateEnd="onRotateEnd"
        />

        <div>
          <input type="checkbox" v-model="canvasVerify"> Simulate request: wait {{ verifyDuration }}s before forwarding
        </div>
      </div>
      <div class="col-md-6">
        <h2> Image </h2>

        <SpinTheWheel
          style="width: 500px; max-width: 100%;"
          type="image"
          :useWeight="true"
          :verify="canvasVerify"
          :prizeId="prizeId"
          :angleBase="-2"
          :prizes="prizesImage"
          @rotateStart="onImageRotateStart"
          @rotateEnd="onRotateEnd"
        >
          <template #wheel>
            <img src="./assets/wheel.png" style="width: 100%;transform: rotateZ(60deg)" />
          </template>
          <template #button>
            <img src="./assets/button.png" style="width: 180px"/>
          </template>
        </SpinTheWheel>

        <div class="btn-list">
          <div class="btn" v-for="(item, idx) in prizesCanvas" :key="idx" :style="{ background: item.bgColor }" @click="onChangePrize(item.id)"></div>
        </div>
        <div class="wheel-result">
          Current 100% <span :style="{ background: prizeRes.bgColor }"></span>
          <br/> Click the button to forcefully change the result during rotation.
          <br/> It is best to change it only once per rotation, about halfway before the rotation slows down.
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import SpinTheWheel from './components/SpinTheWheel/index.vue'
import { PrizeConfig } from './components/SpinTheWheel/types'

const prizeId = ref(0)

const canvasVerify = ref(false)
const verifyDuration = 2
const canvasOptions = {
  btnWidth: 140,
  borderColor: '#584b43',
  borderWidth: 6,
  lineHeight: 30
}

const prizesCanvas: PrizeConfig[] = [
  {
    id: 1,
    name: 'Blue',
    value: 'Blue\'s value',
    bgColor: '#45ace9',
    color: '#ffffff',
    probability: 30
  },
  {
    id: 2,
    name: 'Red',
    value: 'Red\'s value',
    bgColor: '#dd3832',
    color: '#ffffff',
    probability: 40
  },
  {
    id: 3,
    name: 'Yellow',
    value: 'Yellow\'s value',
    bgColor: '#fef151',
    color: '#ffffff',
    probability: 30
  }
]

const prizesImage: PrizeConfig[] = [
  {
    id: 1,
    value: 'Blue\'s value',
    weight: 1
  },
  {
    id: 2,
    value: 'Red\'s value',
    weight: 0
  },
  {
    id: 3,
    value: 'Yellow\'s value',
    weight: 0
  }
]

const prizeRes = computed(() => {
  return prizesCanvas.find(item => item.id === prizeId.value) || prizesCanvas[0]
})

function testRequest (verified: boolean, duration: number) { // 参数 1: 是否通过验证, 2: 延迟时间
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(verified)
    }, duration)
  })
}

function onCanvasRotateStart (rotate: Function) {
  if (canvasVerify.value) {
    const verified = true // true: the test passed verification, false: the test did not pass verification
    testRequest(verified, verifyDuration * 1000).then((verifiedRes) => {
      if (verifiedRes) {
        console.log('Sukses cuy')
        rotate() // Call callback to start rotation
        canvasVerify.value = false // Turn off verification mode
      } else {
        alert('Verification is failed')
      }
    })
    return
  }
  console.log('onCanvasRotateStart')
}

function onImageRotateStart () {
  console.log('onImageRotateStart')
}

function onRotateEnd (prize: PrizeConfig) {
  alert(prize.value)
}

function onChangePrize (id: number) {
  prizeId.value = id
}

</script>

<style lang="scss" scoped>
@import './styles/bootstrap-grid.min.css';
@import './style.scss';
</style>
