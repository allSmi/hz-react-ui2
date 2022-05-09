import './index.scss';
export interface config {
    content: any;
    timeout?: number;
}
declare function Toast(config: config): void;
export default Toast;
