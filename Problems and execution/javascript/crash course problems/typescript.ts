// let test = 123;
// implementing interfaces and types with classes
// interface Instrutor {
//     name: string;
//     course: string;
//     age?: number;
// }

// class AlgoexpertInstructor implements Instrutor{
//     name: string;
//     course: string;
//     constructor(name:string) {
//         this.name = name;
//         this.course = 'AlgoExpert';
//     }
// }

// Generics
interface GetterSetter<Key, Value> {
  set: (key: Key, value: Value) => void;
  get: (key: Key) => Value;
}
class StringNumGetterSetter implements GetterSetter<string, number> {
  map: Map<string, number> = new Map();
  set(key: string, value: number): void {
    this.map.set(key, value);
  }
  get(key: string): number {
    return this.map.get(key) || 0;
  }
}
