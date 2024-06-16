export class Tag{
  static readonly  ANGULAR= new Tag('Angular','#c3002f');
  static readonly  TYPESCRIPT= new Tag('TypeScript','#5b62f4');
  static readonly  BOOTSTRAP = new Tag('Bootstrap','purple');
  static readonly  JAVASCRIPT= new Tag('JavaScript','#efd81d');
  static readonly  REACT= new Tag('React','#03d7ec');
  static readonly  ANGULARMATERIAL= new Tag('AngularMaterial','darkred');
  static readonly  WEPDESIGN= new Tag('WebDesign','darkblue');
  private constructor (private readonly key:string,public readonly color:string){}
  toString(){
    return this.key;
  }
}