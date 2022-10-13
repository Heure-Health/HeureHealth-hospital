import React from "React";
import dashfilterStore from "./DashfilterStore";

class Store {
  constructor() {
    this.dashfilter = new dashfilterStore(this);
  }
}

const StoreContext = React.createContext(new Store());

export const useStores = () => React.useContext(StoreContext);
