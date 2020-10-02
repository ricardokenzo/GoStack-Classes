export default interface IStoragerProvider {
    saveFile(file: string): Promise<string>;
    deleteFile(file: string): Promise<void>;
}
