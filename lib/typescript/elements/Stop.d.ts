import { Component } from 'react';
import { ColorValue } from 'react-native';
import { NumberProp } from '../lib/extract/types';
export interface StopProps {
    stopColor?: ColorValue;
    stopOpacity?: NumberProp;
    offset?: NumberProp;
    parent?: Component;
}
export default class Stop extends Component<StopProps, {}> {
    static displayName: string;
    setNativeProps: () => void;
    render(): null;
}
