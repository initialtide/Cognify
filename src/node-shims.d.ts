declare module 'node:fs' {
  export function existsSync(path: string): boolean;
  export function statSync(path: string): { isFile(): boolean; size: number };
  export function readFileSync(path: string, encoding: 'utf8'): string;
  export function readFileSync(path: string): Uint8Array;
  export default { existsSync, statSync, readFileSync };
}

declare module 'node:path' {
  export function join(...paths: string[]): string;
  export function resolve(...paths: string[]): string;
  export default { join, resolve };
}

declare module 'node:http' {
  export interface IncomingMessage {
    method?: string;
    url?: string;
    headers: Record<string, string | string[] | undefined>;
  }
  export interface ServerResponse {
    statusCode: number;
    setHeader(name: string, value: string | string[] | number): this;
    getHeader(name: string): string | string[] | number | undefined;
    end(chunk?: string): this;
  }
}

declare const process: {
  cwd(): string;
};
