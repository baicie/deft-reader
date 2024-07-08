interface ConfigType extends Record<string, string | boolean> {
  dATABASE_PATH: string
  sERVER_PORT: string
  eNABLE_WEB: boolean
  eNABLE_SWAGGER: boolean
  eNABLE_LOG: boolean
  lOG_PATH: string
  eNABLE_AUTH: boolean
}

export type { ConfigType }
