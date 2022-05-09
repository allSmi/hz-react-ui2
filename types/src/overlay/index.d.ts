import React, { Component } from 'react';
import './index.scss';
interface Props {
    click?: Function;
}
export default class Overlay extends Component<Props> {
    overlayRef: React.RefObject<HTMLDivElement>;
    constructor(props: Props);
    componentDidMount(): void;
    touchMoveHandle: (e: Event) => void;
    scrollHandle: (e: Event) => void;
    clickHandle: () => void;
    show(): void;
    hide(): void;
    render(): JSX.Element;
}
export {};
