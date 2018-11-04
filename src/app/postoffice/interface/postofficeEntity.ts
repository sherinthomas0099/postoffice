export interface PostOfficeEntity{
    id: number;
    name: string;
    zip_code: number;
    shipments: Shipments[];
}
export interface Shipments{
    id: number;
    name: string;
    weight: number;
    status: string;
}