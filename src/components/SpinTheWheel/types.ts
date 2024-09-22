interface PrizeConfigBase {
  id: number;
  value: string;
  probability?: number;
  weight?: number;

  [propName: string]: string | number | undefined;
}

interface PrizeConfigBaseCanvas extends PrizeConfigBase {
  name: string;
  bgColor: string;
  color: string;
}

export type PrizeConfig = PrizeConfigBaseCanvas | PrizeConfigBase;

export interface CanvasConfig {
  radius?: number;
  textRadius?: number;
  textLength?: number;
  textDirection?: string;
  lineHeight?: number;
  borderWidth?: number;
  borderColor?: string;
  btnText?: string;
  btnWidth?: number;
  fontSize?: number;
}

export interface PropsType {
  type: string;
  useWeight: boolean;
  disabled: boolean;
  canRotate: boolean;
  verify: boolean;
  canvas?: CanvasConfig;
  duration: number;
  timingFun: string;
  angleBase: number;
  prizeId: number;
  prizes: PrizeConfig[];
}
