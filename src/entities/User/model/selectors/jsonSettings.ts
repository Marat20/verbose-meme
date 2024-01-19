import { buildSelectors } from '@/shared/lib/store';
import { JsonSettings } from '../types/jsonSettings';

const defaultJsonSettings: JsonSettings = {};

export const [useJsonSettings, getJsonSettings] = buildSelectors(
  (state) => state.user.authData?.jsonSettings ?? defaultJsonSettings,
);

export const [useJsonSettingsByKey, getJsonSettingsByKey] = buildSelectors(
  (state, key: keyof JsonSettings) => state.user.authData?.jsonSettings?.[key],
);
