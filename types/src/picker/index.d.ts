import React, { Component } from 'react';
import './index.scss';
interface Props {
    show?: boolean;
    onCancle?: Function;
    onOk?: Function;
    columns: Array<any>;
}
interface State {
    translate: number;
    itemHeight: number;
    animate: boolean;
}
export default class Picker extends Component<Props, State> {
    private static defaultProps;
    readonly state: {
        itemHeight: number;
        translate: number;
        animate: boolean;
    };
    pickerRef: React.RefObject<HTMLDivElement>;
    initClientY: number;
    initTanslateY: number;
    constructor(props: Props);
    componentDidMount(): void;
    init(): void;
    static getDerivedStateFromProps(props: Props, state: State): null;
    componentDidUpdate(prevProps: Props, prevState: State): void;
    overlayClick: () => void;
    cancleHandle: () => void;
    confirmHandle: () => void;
    touchMoveHandle: (e: Event) => void;
    pickerTouchstartHandle: (e: React.TouchEvent) => void;
    pickerTouchmoveHandle: (e: React.TouchEvent) => void;
    pickerTouchendHandle: (e: React.TouchEvent) => void;
    scrollHandle: (e: Event) => void;
    render(): JSX.Element;
}
export {};
