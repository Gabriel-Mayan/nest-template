import { Logger } from '@nestjs/common';

export function LogErrors() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
      const methodName = propertyKey;
      const logger = new Logger(target.constructor.name);

      try {
        const result = await originalMethod.apply(this, args);
        return result;
      } catch (error: any) {
        logger.error(`Error executing ${methodName}: ${error.message}`);
        throw error;
      }
    };

    return descriptor;
  };
}
