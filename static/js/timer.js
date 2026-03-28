class Timer {
    constructor() {
        this.startTime = 0;
        this.elapsedTime = 0;
        this.timerInterval = null;
    }

    start() {
        this.startTime = Date.now();
        this.timerInterval = setInterval(() => {
            this.elapsedTime = Math.floor((Date.now() - this.startTime) / 1000);
            console.log(`Elapsed Time: ${this.elapsedTime} seconds`);
        }, 1000);
    }

    stop() {
        clearInterval(this.timerInterval);
        this.timerInterval = null;
        this.elapsedTime = Math.floor((Date.now() - this.startTime) / 1000);
        console.log(`Timer stopped at: ${this.elapsedTime} seconds`);
    }

    reset() {
        this.startTime = 0;
        this.elapsedTime = 0;
        clearInterval(this.timerInterval);
        this.timerInterval = null;
        console.log('Timer reset');
    }
}

class Chronometer extends Timer {
    constructor() {
        super();
        this.standardTimes = [];
    }

    detectAnomaly() {
        const standardTime = this.standardTimes[this.standardTimes.length - 1];
        if (Math.abs(this.elapsedTime - standardTime) >= 30) {
            console.warn(`Anomaly detected: Current time differs from standard by ${Math.abs(this.elapsedTime - standardTime)} seconds`);
        }
    }

    addStandardTime(time) {
        this.standardTimes.push(time);
    }

    checkAnomalies() {
        this.detectAnomaly();
    }
}

// Usage Example:
const chronometer = new Chronometer();
chronometer.addStandardTime(120); // Add a standard time
chronometer.start();

setTimeout(() => {
    chronometer.checkAnomalies();
    chronometer.stop();
}, 65000); // Check anomalies after 65 seconds
