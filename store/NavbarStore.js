import { makeAutoObservable } from "mobx";

class NavbarStore {
  constructor() {
    makeAutoObservable(this);
  }

  currentPage = "/";

  setCurrentPage(currentPage) {
    this.currentPage = currentPage;
    console.log(currentPage);
  }
}

export default new NavbarStore();
