interface FireworksOptions {
    target: Element | HTMLElement;
    hue?: number;
    startDelay?: number;
    minDelay?: number;
    maxDelay?: number;
    speed?: number;
    acceleration?: number;
    friction?: number;
    gravity?: number;
    particles?: number;
    trace?: number;
    explosion?: number;
    boundaries?: BoundariesOptions;
    sound?: SoundOptions;
}
interface BoundariesOptions {
    top: number;
    bottom: number;
    left: number;
    right: number;
}
interface SoundOptions {
    enable: boolean;
    list?: string[];
    min?: number;
    max?: number;
}
export declare class Fireworks {
    private _canvas;
    private _ctx;
    private _width;
    private _height;
    private _hue;
    private _startDelay;
    private _minDelay;
    private _maxDelay;
    private _speed;
    private _acceleration;
    private _friction;
    private _gravity;
    private _particleCount;
    private _traceLength;
    private _explosionLength;
    private _boundaries;
    private _sound;
    private _tick;
    private _version;
    private _running;
    private _fireworks;
    private _particles;
    constructor(params: FireworksOptions);
    start(): void;
    stop(): void;
    pause(): void;
    clear(): void;
    get isRunning(): boolean;
    private render;
}
export {};
