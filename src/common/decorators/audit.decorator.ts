import { Logger } from '@nestjs/common';

export function Audit() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
      const method = propertyKey;
      const startTime = Date.now();

      const logger = new Logger(target.constructor.name);
      const argsString = args.map((arg) => JSON.stringify(arg)).join(', ');

      logger.debug(`Executing ${method} with arguments: ${argsString}`);

      try {
        const result = await originalMethod.apply(this, args);
        const executionTime = Date.now() - startTime;

        logger.debug(`Method ${method} executed in ${executionTime}ms`);

        return result;
      } catch (error: any) {
        logger.error(`Error executing ${method}: ${error.message}`);

        throw error;
      }
    };

    return descriptor;
  };
}
