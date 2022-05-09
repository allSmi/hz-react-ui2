import './index.scss';
export interface ModalConfig {
    title?: any;
    content?: any;
    onOk?: () => void;
    onCancle?: () => void;
}
declare function Modal(config: ModalConfig): void;
export default Modal;
