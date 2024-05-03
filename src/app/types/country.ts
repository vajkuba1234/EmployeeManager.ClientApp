export interface Country {
  id: number;
  name: string;
}

export interface CountryList {
  items: Country[];
}

export class CountryItem {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}
