export enum AccountsToReconnectKeys {
  ACCOUNTS_TO_RECONNECT_INSUFFICIENT_PERMISSIONS = 'ACCOUNTS_TO_RECONNECT_INSUFFICIENT_PERMISSIONS',
  ACCOUNTS_TO_RECONNECT_EMAIL_ALIASES = 'ACCOUNTS_TO_RECONNECT_EMAIL_ALIASES',
}

export type AccountsToReconnectKeyValueType = {
  [AccountsToReconnectKeys.ACCOUNTS_TO_RECONNECT_INSUFFICIENT_PERMISSIONS]: string[];
  [AccountsToReconnectKeys.ACCOUNTS_TO_RECONNECT_EMAIL_ALIASES]: string[];
};