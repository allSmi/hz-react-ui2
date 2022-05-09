import React, { Component } from 'react';
import './index.scss';
interface Props {
    afterRead: (result: Result) => void;
    type?: string;
}
interface State {
    img: Array<string>;
}
interface Result {
    file: File;
    content: string;
}
export default class Upload extends Component<Props, State> {
    inputRef: React.RefObject<HTMLInputElement>;
    private static defaultProps;
    constructor(props: Props);
    readonly state: {
        img: never[];
    };
    fileHandle: (file: File) => void;
    fileChangeHandle: (e: React.ChangeEvent<HTMLInputElement>) => void;
    dropHandle: (e: React.DragEvent) => void;
    triggerInput: () => void;
    render(): JSX.Element;
}
export {};
