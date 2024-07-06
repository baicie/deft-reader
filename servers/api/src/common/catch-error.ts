import { Result } from '@/common/result'
import { SetMetadata } from '@nestjs/common'

export const CatchError = () => SetMetadata('catchError', true)

export const CatchErrorInterceptor = (
  _target: unknown,
  _propertyKey: string,
  descriptor: PropertyDescriptor
) => {
  const originalMethod = descriptor.value

  descriptor.value = async function (...args: unknown[]) {
    try {
      return await originalMethod.apply(this, args)
    } catch (error) {
      return Result.error(`Error: ${error.message}`)
    }
  }

  return descriptor
}

// Create a decorator to be used on methods
export const UseCatchError = () => {
  return (
    target: unknown,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) => {
    CatchErrorInterceptor(target, propertyKey, descriptor)
  }
}
