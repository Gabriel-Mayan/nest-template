import { EntityManager } from 'typeorm';

export function Transaction(entityManager: EntityManager) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
      return entityManager.transaction(async (transactionalEntityManager) => {
        return originalMethod.apply(this, [
          transactionalEntityManager,
          ...args,
        ]);
      });
    };

    return descriptor;
  };
}
