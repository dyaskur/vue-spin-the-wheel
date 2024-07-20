<template>
  <div class="fw-container">
    <!-- wheel -->
    <div
        class="fw-wheel"
        :style="rotateStyle"
        @transitionend="onRotateEnd"
        @webkitTransitionend="onRotateEnd"
    >
      <canvas
          v-if="type === 'canvas'"
          ref="wheelEl"
          :width="(canvasConfig.radius || 1) * 2"
          :height="(canvasConfig.radius || 1) * 2"
      />
      <slot name="wheel" v-else/>
    </div>
    <!-- button -->
    <div class="fw-btn">
      <div
          v-if="type === 'canvas'"
          class="fw-btn__btn"
          :style="{ width: canvasConfig.btnWidth + 'px', height: canvasConfig.btnWidth + 'px'}"
          @click="handleClick">
        {{ canvasConfig.btnText }}
      </div>
      <div v-else class="fw-btn__image" @click="handleClick">
        <slot name="button"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {PrizeConfig, CanvasConfig} from './types'
import {useCanvas} from './hooks/useCanvas'
import {useRotate} from './hooks/useRotate'

interface PropsType {
  type?: string;
  useWeight?: boolean;
  disabled?: boolean;
  verify?: boolean;
  canvas?: CanvasConfig;
  duration?: number;
  timingFun?: string;
  angleBase?: number;
  prizeId?: number;
  prizes: PrizeConfig[];
}

const props = withDefaults(
    defineProps<PropsType>(),
    {
      type: 'canvas', // canvas || image
      useWeight: false, // Calculate probability by weight
      disabled: false, // disable the spinner
      verify: false, // Whether to enable verification
      duration: 6000, // The time from one rotation, in milliseconds
      timingFun: 'cubic-bezier(0.36, 0.95, 0.64, 1)', // The transition time function of the turntable's rotation
      angleBase: 10, // The base of the rotation angle, the number of rotations 360 * 10
      prizeId: 0, // Not used when 0, other values, the result of the spin is the prize of this ID, which can be changed during the spin
      prizes: () => [], // Names list
    },
)

const emit = defineEmits(['rotateStart', 'rotateEnd'])

const {wheelEl, canvasConfig} = useCanvas(props)
const {handleClick, rotateStyle, onRotateEnd} = useRotate(props, emit)

defineExpose({
  startRotate: (): void => {
    handleClick()
  },
})
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
