export interface CreateContractDto {
    passport: string,
    licenseplate: string,
    start_date: Date,
    end_date: Date,
    payment_code: number,
    driver_code: number,
    extension_days: number,
    first_amount: number,
    final_amount: number,
    active: string,
    tarifa: number
}