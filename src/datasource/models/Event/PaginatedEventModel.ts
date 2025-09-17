export interface PaginatedEventsModel {
    id: number;
    eventName: string;
    eventType: string;
    eventLocation: string;
    attendance: number;
    offering: number;
    statusId: number;
    description: string;
    filePath: string;
    createdDate: string;
    updateDate: string;
    eventStartDate: string;
    eventEndDate: string;
    totalRows:number;



}