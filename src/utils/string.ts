export {};

declare global {
  interface String {
    replaceBr(): string;
  }
}

String.prototype.replaceBr = function () {
  return (this as unknown as string).replace(/\r\n/g, "<br />");
};
