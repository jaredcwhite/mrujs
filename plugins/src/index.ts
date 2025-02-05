import { Adapter, MrujsInterface } from '../../src/types'

declare global {
  interface Window {
    mrujs: MrujsInterface
    Rails: MrujsInterface
    Turbolinks?: Adapter
    Turbo?: Adapter
  }
}

export * from './asyncConfirm'
export * from './cableCar'
export * from './jsErb'
export * from './mrujsTurbo'
