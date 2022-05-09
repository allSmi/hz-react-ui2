import React, { Component } from 'react';
import './index.scss';
interface Props {
    src: string;
    className?: string;
    width?: number;
    height?: number;
    mode?: 'center' | 'cover';
}
interface State {
    isLoad: boolean;
}
export default class Img extends Component<Props, State> {
    imgPlaceholder: React.RefObject<HTMLDivElement>;
    constructor(props: Props);
    private static defaultProps;
    readonly state: {
        isLoad: boolean;
    };
    loadImg: () => void;
    componentDidMount(): void;
    componentDidUpdate(prevProps: Props): void;
    render(): JSX.Element;
}
export {};
