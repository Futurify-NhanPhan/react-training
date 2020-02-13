export default interface Employee extends People {
  name: string;
  address: string;
}

interface People {
  age: number;
}
