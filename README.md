
# Vue-Spin-The-Wheel For Vue3

<p align="center">
  <a href="https://www.npmjs.com/package/vue-spin-the-wheel">
    <img src="https://img.shields.io/npm/dt/vue-spin-the-wheel.svg" alt="Downloads total">
  </a>
  <a href="https://www.npmjs.com/package/vue-spin-the-wheel">
    <img src="https://img.shields.io/npm/dm/vue-spin-the-wheel.svg" alt="Downloads per month">
  </a>
  <br>
  <a href="https://github.com/dyaskur/vue-spin-the-wheel/blob/master/LICENSE.md">
    <img src="https://img.shields.io/npm/l/vue-spin-the-wheel.svg" alt="MIT License">
  </a>
  <br>
  <a href="https://www.npmjs.com/package/vue-spin-the-wheel">
    <img src="https://img.shields.io/npm/v/vue-spin-the-wheel.svg" alt="Version">
  </a>
  <a href="https://www.npmjs.com/package/vue-spin-the-wheel">
    <img src="https://img.shields.io/bundlephobia/minzip/vue-spin-the-wheel.svg" alt="Package Size">
  </a>
</p>
<p align="center">

_Alternative name: Wheel of Names, Wheel of Fortune, Spin the wheel_

"Spin the Wheel" is a versatile digital tool designed to randomly select a name or item from a list.
It is commonly used in various settings such as classrooms, meetings, raffles, and any situation requiring a random selection.
This Vue component simplifies the creation and integration of a spin-the-wheel feature into your Vue3 applications, offering an engaging and interactive experience for users.
</p>

## Install
```
yarn add vue-spin-the-wheel
```
or
```
npm install vue-spin-the-wheel
```

## Demo

### online
https://vue-spin-the-wheel.yaskur.com

## Usage

```html
<template>
  <div>
    <!-- type: image -->
    <SpinTheWheel
      style="width: 500px; max-width: 100%;"
      ref="wheelEl"
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


    <!-- type: canvas -->
    <SpinTheWheel
      style="width: 500px; max-width: 100%;"
      :verify="canvasVerify"
      :canvas="canvasOptions"
      :prizes="prizesCanvas"
      @rotateStart="onCanvasRotateStart"
      @rotateEnd="onRotateEnd"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import {SpinTheWheel} from 'vue-spin-the-wheel'
import 'vue-spin-the-wheel/style.css'

const prizeId = ref(0)

const wheelEl = ref()
const canvasVerify = ref(false) // Whether the turntable in canvas mode is enabled for verification
const verifyDuration = 2
const canvasOptions = {
  btnWidth: 140,
  borderColor: '#584b43',
  borderWidth: 6,
  lineHeight: 30
}

const prizesCanvas = [
  {
    id: 1, //* The unique id of each prize, an integer greater than 0
    name: 'Blue', // Prize name, display value when type is canvas (this parameter is not needed when type is image)
    value: 'Blue\'s value', //* Prize value, return value after spinning
    bgColor: '#45ace9', // Background color (no need for this parameter when type is image)
    color: '#ffffff', // Font color (this parameter is not required when type is image)
    probability: 30 //* Probability, up to 4 decimal places (the sum of the probabilities of all prizes
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

const prizesImage = [
  {
    id: 1, //* The unique id of each prize, an integer greater than 0
    value: 'Blue\'s value', //* Prize value, return value after spinning
    weight: 1 // Weight, if useWeight is true, the probability is calculated by weight (weight must be an integer), so probability is invalid
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


onMounted(() => {
  wheelEl.value.startRotate() // Can start rotation
})

// Simulate the request back-end interface
function testRequest (verified, duration) { // verified: whether to pass the verification, duration: delay time
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(verified)
    }, duration)
  })
}

function onCanvasRotateStart (rotate) {
  if (canvasVerify.value) {
    const verified = true // true: the test passed the verification, false: the test failed the verification
    testRequest(verified, verifyDuration * 1000).then((verifiedRes) => {
      if (verifiedRes) {
        console.log('Verification passed, start to rotate')
        rotate() // Call the callback, start spinning
        canvasVerify.value = false // Turn off verification mode
      } else {
        alert('Failed verification')
      }
    })
    return
  }
  console.log('onCanvasRotateStart')
}

function onImageRotateStart () {
  console.log('onImageRotateStart')
}

function onRotateEnd (prize) {
  alert(prize.value)
}

function onChangePrize (id) {
  prizeId.value = id
}
</script>
```

## SpinTheWheel Events
| Event name | Description | Callback parameters |
| ------ | ------ | ------ |
| rotateStart | Triggered when the dial button is clicked | When `verify` is `true`, there will be a callback, and the callback function will be called to start spinning |
| rotateEnd | Triggered at the end of the turntable animation | The entire prize Object |

## SpinTheWheel Methods
| Event name | Description | Callback parameters |
| ------ | ------ | ------ |
| startRotate | Can trigger rotation | When `verify` is `true`, the callback function is triggered in the rotateStart event |

## SpinTheWheel Attributes
| Parameters | Description | Type | Default Value |
| ------ | ------ | ------ | ----- |
| type | Type of turntable (canvas, image) | String | canvas |
| useWeight | Whether to calculate probability by weight | Boolean | false |
| disabled | Whether to disable (after disabled, click the button will not rotate) | Boolean | false |
| verify | Whether to enable verification mode | Boolean | false |
| canvas.radius | Radius of circle (type: canvas) | Number | 250 |
| canvas.textRadius | The distance of the text from the center of the circle (type: canvas) | Number | 190 |
| canvas.textLength | A few characters in one line of the prize, beyond the line break (maximum two lines) | Number | 6 |
| canvas.textDirection | Prize text direction (horizontal, vertical) | String | horizontal |
| canvas.lineHeight | Text line height (type: canvas) | Number | 20 |
| canvas.borderWidth | Round outer border (type: canvas) | Number | 0 |
| canvas.borderColor | Color value of the outer border (type: canvas) | String | transparent |
| canvas.btnText | Button text (type: canvas) | String | GO |
| canvas.btnWidth | Button width (px) | Number | 140 |
| canvas.fontSize | Prize size (px) | Number | 34 |
| duration | Time to complete one rotation (unit: ms) | Number | 6000 |
| timingFun | Css time function of rotation transition | String | cubic-bezier(0.36, 0.95, 0.64, 1) |
| angleBase | Number of rotations (angleBase * 360 is the total angle of one rotation, it can be reversed when it is a negative number) | Number | 10 |
| prizeId | Specify the id, it will spin to the prize of this id every time (when it is 0, the value can be changed during the rotation according to the probability of each prize itself to complete various show operations) | Number | 0 |
| prizes | Prize list (structure reference Usage) | Array | / |

### 📑 License

Vue Spin The Wheel is available under the [MIT](http://opensource.org/licenses/MIT) software license.

---
_This Vue3 component is originally derived from [vue-fortune-wheel](https://github.com/XiaoLin1995/vue-fortune-wheel). However, it lacked certain features that I needed. Therefore, I forked the project and added more features and capabilities to enhance its functionality and versatility._
