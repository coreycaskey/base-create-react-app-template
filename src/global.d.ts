// IMPORTANT: this is only needed if using CSS modules

declare module '*.module.css' {
  const content: Record<string, string>;
  export default content;
}
