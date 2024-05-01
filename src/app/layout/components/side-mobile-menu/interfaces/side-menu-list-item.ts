export interface SideMenuItem {
    title: string;
    dropdownItemList: {
      subTitle: string;
      subList?: {
        subListTitle: string;
      }[];
    }[];
  }