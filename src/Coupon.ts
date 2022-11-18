export default class Coupon {
    constructor(readonly code: string, readonly percentage: number, readonly expiredDate?: Date) {
    }
    
    isValid(){
        if (!this.expiredDate) return true; 
        const today = new Date();
        return this.expiredDate.getTime() >= today.getTime();
    }
    
    isExpired(){
        return !this.isValid();
    }
}