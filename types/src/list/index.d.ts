import React, { PureComponent } from "react";
import "./index.scss";
interface State {
    refreshStyle: {
        transform: string;
    };
    tip: string;
    animate: boolean;
    isReachBottom: boolean;
}
interface Props {
    refresh?: boolean;
    load?: boolean;
    isRefresh?: boolean;
    onRefresh?: Function;
    height?: number;
    isLoad?: boolean;
    onLoad?: Function;
    offset?: number;
    finish?: boolean;
    finishText?: any;
}
export default class List extends PureComponent<Props, State> {
    initflag: boolean;
    touchStartY: number;
    loadingHeight: number;
    translateY: number;
    diffY: number;
    beforeRefreshTipText: string;
    prepareRefreshTipText: string;
    processRefreshTipText: string;
    offset: number;
    listEl: React.RefObject<HTMLDivElement>;
    loadingEl: any;
    contentEl: any;
    moreLoadEl: any;
    containerEl: any;
    loading: boolean;
    private static defaultProps;
    readonly state: {
        refreshStyle: {
            transform: string;
        };
        tip: string;
        animate: boolean;
        isReachBottom: boolean;
    };
    constructor(props: Props);
    componentWillUnmount(): void;
    componentDidMount(): void;
    componentDidUpdate(prevProps: Props): void;
    touchStartHandle: (event: React.TouchEvent<HTMLDivElement>) => void;
    touchMoveHandle: (event: TouchEvent) => void;
    scrollHandle: (e: any) => void;
    moreLoadInViewport: () => boolean;
    touchEndHandle: (event: React.TouchEvent) => void;
    startPullDownRefresh: () => void;
    stopPullDownRefresh: () => void;
    startLoad: () => void;
    render(): JSX.Element;
}
export {};
