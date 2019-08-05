declare module '*.scss' {
     const content: {[key: string]: string};
     export = content;
};
declare module '*.sass' {
    const styles: {[key: string]: string};
    export = styles;
};