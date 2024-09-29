
export class People {
    constructor(
      public id: string = null,
      public age: number,
      public fullName: string = null,
      public skills: Array<string> = new Array<string>()
    ) {}
  }