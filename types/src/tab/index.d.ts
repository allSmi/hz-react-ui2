import React, { Component } from 'react';
import './index.scss';
interface Props {
    index: number;
    onChange: Function;
    className?: string;
}
interface State {
    style: Style;
    isInit: boolean;
}
interface Style {
    translateX: number;
    width: number;
}
export default class componentName extends Component<Props, State> {
    tabEl: React.RefObject<HTMLDivElement>;
    constructor(props: Props);
    readonly state: State;
    componentDidMount(): void;
    componentDidUpdate(prevProps: Props): void;
    calcActiveStyle: (index: number, type?: string | undefined) => void;
    changeItem: (index: number) => void;
    render(): JSX.Element;
}
export {};
