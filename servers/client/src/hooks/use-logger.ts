import { Logger } from '../utils/logger/logger'
import { useInjectable } from './use-di'

/**
 * hook: 获得注入的 Logger
 * @returns
 */
export function useLogger() {
  return useInjectable(Logger)
}
