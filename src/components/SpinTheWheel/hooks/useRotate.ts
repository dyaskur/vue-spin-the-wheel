import {computed, ref, watch} from 'vue'
import sumBy from 'lodash/sumBy'
import random from 'lodash/random'
import type {PrizeConfig, PropsType} from '../types'

export function useRotate(props: PropsType, emit: (event: 'rotateStart' | 'rotateEnd', onRotateStart?: () => void) => void) {
  const isRotating = ref(false)
  const rotateEndDeg = ref(0)
  const prizeRes = ref()

  const probabilityTotal = computed(() => {
    if (props.useWeight) return 100
    return sumBy(props.prizes, (row: PrizeConfig) => row.probability || 0)
  })

  const decimalSpaces = computed(() => {
    if (props.useWeight) return 0
    const sortArr = [...props.prizes].sort((a, b) => {
      const aRes = String(a.probability).split('.')[1]
      const bRes = String(b.probability).split('.')[1]
      const aLen = aRes ? aRes.length : 0
      const bLen = bRes ? bRes.length : 0
      return bLen - aLen
    })
    const maxRes = String(sortArr[0].probability).split('.')[1]
    const idx = maxRes ? maxRes.length : 0
    return [1, 10, 100, 1000, 10000][idx > 4 ? 4 : idx]
  })

  const prizesIdArr = computed(() => {
    const idArr: number[] = []
    props.prizes.forEach((row) => {
      const count: number = props.useWeight ? (row.weight || 0) : ((row.probability || 0) * decimalSpaces.value)
      const arr = (new Array(count)).fill(row.id)
      idArr.push(...arr)
    })
    return idArr
  })

  const rotateDuration = computed(() => {
    return isRotating.value ? props.duration / 1000 : 0
  })

  const rotateStyle = computed(() => {
    return {
      '-webkit-transform': `rotateZ(${rotateEndDeg.value}deg)`,
      transform: `rotateZ(${rotateEndDeg.value}deg)`,
      '-webkit-transition-duration': `${rotateDuration.value}s`,
      'transition-duration': `${rotateDuration.value}s`,
      '-webkit-transition-timing-function:': props.timingFun,
      'transition-timing-function': props.timingFun,
    }
  })

  const rotateBase = computed(() => {
    let angle = props.angleBase * 360
    if (props.angleBase < 0) angle -= 360
    return angle
  })

  const canRotate = computed(() => {
    return !props.disabled && !isRotating.value && probabilityTotal.value === 100
  })

  watch(() => props.prizeId, (newVal) => {
    if (!isRotating.value) return
    let newAngle = getTargetDeg(newVal)
    if (props.angleBase < 0) newAngle -= 360
    const prevEndDeg = rotateEndDeg.value
    let nowEndDeg = props.angleBase * 360 + newAngle
    const angle = 360 * (Math.floor((nowEndDeg - prevEndDeg) / 360))
    if (props.angleBase >= 0) {
      nowEndDeg += Math.abs(angle)
    } else {
      nowEndDeg += -360 - angle
    }
    rotateEndDeg.value = nowEndDeg
  })

  checkProbability()

  // Check if the total probability is 100
  function checkProbability() {
    if (probabilityTotal.value !== 100) {
      throw new Error('Prizes Is Error: Sum of probabilities is not 100!')
    }
    return true
  }

  function handleClick(): void {
    if (!canRotate.value) return
    if (props.verify) {
      emit('rotateStart', onRotateStart)
      return
    }
    emit('rotateStart')
    onRotateStart()
  }

  // start spin/rotate event
  function onRotateStart(): void {
    isRotating.value = true
    const prizeId = props.prizeId || getRandomPrize()
    rotateEndDeg.value = rotateBase.value + getTargetDeg(prizeId)
  }

  // end spin/rotate event
  function onRotateEnd(): void {
    isRotating.value = false
    rotateEndDeg.value %= 360
    emit('rotateEnd', prizeRes.value)
  }

  // Get the id of the random prize
  function getRandomPrize(): number {
    const len = prizesIdArr.value.length
    return prizesIdArr.value[random(0, len - 1)]
  }

  // Get the angle where the prize is located
  function getTargetDeg(prizeId: number): number {
    const angle = 360 / props.prizes.length
    const num = props.prizes.findIndex(row => row.id === prizeId)
    prizeRes.value = props.prizes[num]
    return 360 - (angle * num + angle / 2)
  }

  return {
    rotateStyle,
    handleClick,
    onRotateEnd,
  }
}
