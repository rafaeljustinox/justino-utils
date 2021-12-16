/**
 * Bind class methods to this instance
 * @param classPrototype Class prototype. Example: MyClass.prototype
 * @param thisClass Class instance (this)
 */
export default function bindClassMethods(classPrototype: any, thisClass: any) {
  Object.getOwnPropertyNames(classPrototype)
    .filter((propertyName) => propertyName !== 'constructor')
    .forEach((method: any) => {
      thisClass[method] = thisClass[method].bind(thisClass);
    });
}
