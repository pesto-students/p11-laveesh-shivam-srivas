class CustomPromise {
    constructor(executor) {
        this.state = 'pending';
        this.value = undefined;
        this.error = undefined;
        this.onFulfilledCallbacks = [];
        this.onRejectedCallbacks = [];

        const resolve = (value) => {
            if (this.state === 'pending') {
                this.state = 'fulfilled';
                this.value = value;
                this.onFulfilledCallbacks.forEach((callback) => callback(this.value));
            }
        };

        const reject = (reason) => {
            if (this.state === 'pending') {
                this.state = 'rejected';
                this.error = reason;
                this.onRejectedCallbacks.forEach((callback) => callback(this.error));
            }
        };

        try {
            executor(resolve, reject);
        } catch (error) {
            reject(error);
        }
    }

    then(onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (value) => value;
        onRejected = typeof onRejected === 'function' ? onRejected : (reason) => { throw reason; };

        const newPromise = new CustomPromise((resolve, reject) => {
            const fulfilledHandler = () => {
                setTimeout(() => {
                    try {
                        const result = onFulfilled(this.value);
                        if (result instanceof CustomPromise) {
                            result.then(resolve, reject);
                        } else {
                            resolve(result);
                        }
                    } catch (error) {
                        reject(error);
                    }
                }, 0);
            };

            const rejectedHandler = () => {
                setTimeout(() => {
                    try {
                        const result = onRejected(this.error);
                        if (result instanceof CustomPromise) {
                            result.then(resolve, reject);
                        } else {
                            resolve(result);
                        }
                    } catch (error) {
                        reject(error);
                    }
                }, 0);
            };

            if (this.state === 'fulfilled') {
                fulfilledHandler();
            } else if (this.state === 'rejected') {
                rejectedHandler();
            } else {
                this.onFulfilledCallbacks.push(fulfilledHandler);
                this.onRejectedCallbacks.push(rejectedHandler);
            }
        });

        return newPromise;
    }

    catch(onRejected) {
        return this.then(undefined, onRejected);
    }

    static resolve(value) {
        return new CustomPromise((resolve) => {
            resolve(value);
        });
    }

    static reject(reason) {
        return new CustomPromise((resolve, reject) => {
            reject(reason);
        });
    }
}