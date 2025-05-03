import { ReportStatus } from "../app/app.ENUM";

export interface Reports {
    id:number,
    type: string,
    status:ReportStatus,
    url: URL | null
}