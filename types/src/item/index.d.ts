import React, { Component } from 'react';
import '../common/css/common.scss';
import './index.scss';
interface Props {
    label?: string | number;
    className?: string;
    onChange?: Function;
    value?: string | number;
    disable?: boolean;
}
interface State {
    value: string | number | undefined;
}
export default class Overlay extends Component<Props, State> {
    private static defaultProps;
    readonly state: {
        value: string;
    };
    componentDidMount(): void;
    changeHandle: (e: React.ChangeEvent<HTMLInputElement>) => void;
    render(): JSX.Element;
}
export {};
