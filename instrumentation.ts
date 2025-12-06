export async function register() {
  if (typeof global !== "undefined" && typeof global.localStorage !== "undefined" && typeof global.localStorage.getItem !== "function") {
    // Node.js v22/v25 experimental localStorage might exist as an empty object
    Object.defineProperty(global, "localStorage", {
      value: {
        getItem: () => null,
        setItem: () => null,
        removeItem: () => null,
        clear: () => null,
        key: () => null,
        length: 0,
      },
      writable: true,
      enumerable: true,
      configurable: true,
    });
  }
}
