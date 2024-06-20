export class Tag{
  static readonly  ANGULAR= new Tag('Angular','#d61a15');
  static readonly  TYPESCRIPT= new Tag('TypeScript','#5b62f4');
  static readonly  JAVASCRIPT= new Tag('JavaScript','#e8d44d');
  static readonly  REACT= new Tag('React','#03d7ec');
  static readonly  WEPDESIGN= new Tag('WebDesign','#5b62f4');
  static readonly  BOOTSTRAP = new Tag('Bootstrap','#8411f6');
  static readonly  ANGULARMATERIAL= new Tag('AngularMaterial','darkred');
  static readonly  JQUERY= new Tag('Jquery','#076fae');
  private constructor (private readonly key:string,public readonly color:string){}
  toString(){
    return this.key;
  }
}
