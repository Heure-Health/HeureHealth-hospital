
export interface DashFilters {
    region: Region;
    regionSel: string;
}
export interface Region {
    National: string;
    Divisional:string;
    Regional: string;
    State: string;
    HRR:string;
    HRA: string;
    Zip: string;
}
export interface  MainFilters {
    Growth:string;
    Quality:string;
    Cost:string;
}

class DashfilterStore {
    dashfil = [];
    regionSel = "";
   setRegion = (region:string)=>{
    this.regionSel = region;
   }
}

const dashfilterStore = new DashfilterStore();

export default dashfilterStore;
