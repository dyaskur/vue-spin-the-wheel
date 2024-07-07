import { AllowedComponentProps } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { DefineComponent } from 'vue';
import { ExtractPropTypes } from 'vue';
import { PropType } from 'vue';
import { VNodeProps } from 'vue';

declare type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;

declare type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};

declare type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};

declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare interface CanvasConfig {
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

declare const _default: {
    install: (app: any) => void;
};
export default _default;

declare type PrizeConfig = PrizeConfigProbability | PrizeConfigWeight | PrizeConfigProbabilityCanvas | PrizeConfigWeightCanvas;

declare interface PrizeConfigBase {
    id: number;
    value: any;
    [propName: string]: any;
}

declare interface PrizeConfigBaseCanvas extends PrizeConfigBase {
    name: string;
    bgColor: string;
    color: string;
}

declare interface PrizeConfigProbability extends PrizeConfigBase {
    probability: number;
}

declare interface PrizeConfigProbabilityCanvas extends PrizeConfigBaseCanvas {
    probability: number;
}

declare interface PrizeConfigWeight extends PrizeConfigBase {
    weight: number;
}

declare interface PrizeConfigWeightCanvas extends PrizeConfigBaseCanvas {
    weight: number;
}

declare interface PropsType {
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

export declare const SpinTheWheel: __VLS_WithTemplateSlots<DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<PropsType>, {
type: string;
useWeight: boolean;
disabled: boolean;
verify: boolean;
canvas: () => {};
duration: number;
timingFun: string;
angleBase: number;
prizeId: number;
prizes: () => never[];
}>, {
startRotate: () => void;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
rotateStart: (...args: any[]) => void;
rotateEnd: (...args: any[]) => void;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<PropsType>, {
type: string;
useWeight: boolean;
disabled: boolean;
verify: boolean;
canvas: () => {};
duration: number;
timingFun: string;
angleBase: number;
prizeId: number;
prizes: () => never[];
}>>> & {
onRotateEnd?: ((...args: any[]) => any) | undefined;
onRotateStart?: ((...args: any[]) => any) | undefined;
}, {
canvas: CanvasConfig;
type: string;
useWeight: boolean;
disabled: boolean;
verify: boolean;
duration: number;
timingFun: string;
angleBase: number;
prizeId: number;
prizes: PrizeConfig[];
}>, {
    wheel?(_: {}): any;
    button?(_: {}): any;
}>;

export { }
