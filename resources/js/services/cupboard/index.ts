class Cupboard {
    /**
     * Preset keys.
     */
    public readonly KEYS = {
        AUTH: "auth",
    };

    /**
     * Our storage prefix.
     */
    private readonly prefix: string = "@Cupboard:";

    /**
     * Our storage key.
     */
    private readonly key: string;

    /**
     * Our initial storage.
     */
    private readonly initialStorage: any;

    /**
     * Our storage.
     */
    private storage: any;

    /**
     * Cupboard.
     *
     * @param {String} key The key our details will be stored under.
     * @param {Object} initialStorage The storage to initialize with.
     */
    constructor(key: string = "cupboard", initialStorage: any = {}) {
        this.key = `${this.prefix}${key}`;
        this.initialStorage = initialStorage;
        this.storage = initialStorage;

        // Check if we've got any persisted state.
        const persisted = window.localStorage.getItem(this.key);

        // If we've got persisted state, stock our cupboard up.
        if (persisted) {
            this.hydrate(JSON.parse(persisted));
        } else {
            // If we don't have a persisted state, we likely haven't setup our cupboard.
            // So let's persist the initial storage.
            this.persist();
        }
    }

    /**
     * Fill our cupboard.
     *
     * @param {Object} persisted The persisted state.
     *
     * @return {Object} Our current storage.
     */
    hydrate = (persisted: any): any => (this.storage = persisted);

    /**
     * Get a value from our cupboard.
     *
     * @param {String|Boolean} key The key to access from our cupboard.
     *
     * @return {any}
     */
    get = (key: string | boolean = false): any => {
        if (key === true || key === false) {
            return this.storage;
        }

        if (key.indexOf(".") > -1) {
            const keys = key.split(".");

            return keys.reduce((acc, k) => {
                if (k in acc) {
                    return acc[k];
                }

                throw new Error(
                    `You attempted to access an object attribute that doesn't exist! ${key}`
                );
            }, this.storage);
        }

        return this.storage[key];
    };

    /**
     * Set a value in our cupboard.
     *
     * @param {String} key - The key to set in our cupboard.
     * @param {any} value - The value to set the key to.
     * @param {Boolean} shouldPersist - Should we persist this change to local storage?
     *
     * @return {void}
     */
    set = (key: string, value: any, shouldPersist: boolean = true): void => {
        // If we've got a . then we're accessing an object
        if (key.indexOf(".") > -1) {
            const keys = key.split(".");

            keys.reduce((acc, k, index) => {
                // We've hit the attribute we want to change
                if (index === keys.length - 1) {
                    return (acc[k] = value);
                }

                // We've still got a tree to climb!
                return acc[k] || (acc[k] = {});
            }, this.storage);
        } else {
            this.storage[key] = value;
        }

        if (shouldPersist) {
            this.persist();
        }
    };

    /**
     * Remove a value from our cupboard.
     *
     * @param {String} key - The key to set in our cupboard.
     * @param {Boolean} shouldPersist - Should we persist this change to local storage?
     *
     * @return {void}
     */
    remove = (key: string, shouldPersist: boolean = true): void => {
        // If we've got a . then we're accessing an object
        if (key.indexOf(".") > -1) {
            const keys = key.split(".");

            keys.reduce((acc, k, index) => {
                // We've hit the attribute we want to change
                if (index === keys.length - 1) {
                    return (acc[k] = undefined);
                }

                // We've still got a tree to climb!
                return acc[k] || (acc[k] = {});
            }, this.storage);
        } else {
            this.storage[key] = undefined;
        }

        if (shouldPersist) {
            this.persist();
        }
    };

    /**
     * Persist our current state.
     *
     * @return {void}
     */
    persist = (): void =>
        window.localStorage.setItem(this.key, JSON.stringify(this.storage));

    /**
     * Purge our cupboard.
     *
     * @return {void}
     */
    purge = (): void =>
        window.localStorage.setItem(
            this.key,
            JSON.stringify(this.initialStorage)
        );
}

export default Cupboard;
