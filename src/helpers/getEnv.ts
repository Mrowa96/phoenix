const DEFAULT_OPTIONS = { asNumber: false, throwOnUndefined: true };

export function getEnv(name: string, options: { asNumber: true; throwOnUndefined: false }): number | undefined;
export function getEnv(name: string, options: { asNumber: true; throwOnUndefined?: true }): number;
export function getEnv(name: string, options: { asNumber?: false; throwOnUndefined: true }): string;
export function getEnv(name: string, options: { asNumber?: false; throwOnUndefined: false }): string | undefined;
export function getEnv(name: string): string;

export function getEnv(
  name: string,
  options: { asNumber?: boolean; throwOnUndefined?: boolean } = DEFAULT_OPTIONS,
): string | number | undefined {
  const env = import.meta.env[name];
  const preparedOptions = {
    ...DEFAULT_OPTIONS,
    ...options,
  };

  if (preparedOptions.throwOnUndefined && [undefined, null, ''].includes(env)) {
    throw new Error(`Missing env: ${name}`);
  }

  if (preparedOptions.asNumber) {
    if (!env) {
      return undefined;
    }

    const envAsNumber = parseInt(env, 10);

    if (Number.isNaN(envAsNumber)) {
      throw new Error(`Env: ${name} should be a number`);
    }

    return envAsNumber;
  }

  return env;
}
