export enum PaymentStatus {
    Success = 'success',
    Failed = 'failed',
}

export enum LoadStatus {
    Pending = 'pending',
    Success = 'success',
    Failed = 'failed',
}



abstract class Logger {
    abstract log(message: string) : void
    printDate(date: Date): void {
        this.log(date.toString())
    }
}

class LogWithDate extends Logger {
    log(message: string): void {
        console.log(message)
    }
    logWithDate(date: Date, message: string): void {
        this.printDate(date)
        this.log(message)
    }
}
