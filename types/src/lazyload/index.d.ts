import React, { Component } from 'react';
import "./index.scss";
interface Props {
    className?: string;
    debounce?: boolean;
    elementType?: string;
    height?: string | number;
    offset?: number;
    offsetBottom?: number;
    offsetHorizontal?: number;
    offsetLeft?: number;
    offsetRight?: number;
    offsetTop?: number;
    offsetVertical?: number;
    threshold?: number;
    throttle?: number;
    width?: string | number;
    onContentVisible?: Function;
}
interface State {
    visible: boolean;
}
export default class LazyLoad extends Component<Props> {
    lazyloadEl: React.RefObject<any>;
    _mounted: boolean;
    readonly state: {
        visible: boolean;
    };
    private static defaultProps;
    constructor(props: Props);
    componentDidMount(): void;
    componentDidUpdate(): void;
    shouldComponentUpdate(nextProps: Props, nextState: State): boolean;
    componentWillUnmount(): void;
    getEventNode(): HTMLElement | Window;
    getOffset(): {
        top: number | undefined;
        bottom: number | undefined;
        left: number | undefined;
        right: number | undefined;
    };
    lazyLoadHandler(): void;
    detachListeners(): void;
    render(): React.ReactElement<{
        className: string;
        style: {
            height: string | number | undefined;
            width: string | number | undefined;
        };
        ref: React.RefObject<any>;
    }, string | React.JSXElementConstructor<any>>;
}
export {};
