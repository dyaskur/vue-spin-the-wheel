import SpinTheWheel from './SpinTheWheel/index.vue'
import type {PrizeConfig} from './SpinTheWheel/types'

export default {
  install: (app: any) => {
    app.component('SpinTheWheel', SpinTheWheel)
  }
}
export { SpinTheWheel, PrizeConfig}
