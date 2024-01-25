import { FeatureFlags } from '@/shared/types/featureFlags';

import { getFeatureFlags } from '../lib/setGetFeatures';

interface ToggleFeaturesFuncOptions<T> {
  name: keyof FeatureFlags;
  on: () => T;
  off: () => T;
}

export const toggleFeaturesFunc = <T>({
  on,
  off,
  name,
}: ToggleFeaturesFuncOptions<T>): T => {
  if (getFeatureFlags(name)) {
    return on();
  }
  return off();
};
