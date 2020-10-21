enum EventType {
    Mouse,
    Keyboard,
}

interface Event {
    timestamp: number;
}
interface MouseEvent extends Event {
    xio: number;
    yuhu: number;
}
interface KeyEvent extends Event {
    keyCode: number;
}

function listenEvent(eventType: EventType, handler: (n: Event) => void) {
    /* ... */
    console.log(eventType);
    console.log(handler);
}

// Unsound, but useful and common
/// listenEvent(EventType.Mouse, (e: MouseEvent) => console.log(e.xio + "," + e.y));

// Undesirable alternatives in presence of soundness
listenEvent(EventType.Mouse, (e: Event) =>
    console.log((e as MouseEvent).xio + "," + (e as MouseEvent).yuhu)
);
listenEvent(EventType.Mouse, ((e: MouseEvent) =>
    console.log(e.xio + "," + e.yuhu)) as (e: Event) => void);

  // Still disallowed (clear error). Type safety enforced for wholly incompatible types
  // listenEvent(EventType.Mouse, (e: number) => console.log(e));