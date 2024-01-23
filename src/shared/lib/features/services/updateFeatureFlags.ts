import { ThunkConfig } from '@/app/providers/StoreProvider';
import { FeatureFlags } from '@/shared/types/featureFlags';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { updateFeatureFlagsMutation } from '../api/featureFlagsApi';
import { getAllFeatureFlags, setFeatureFlags } from '../lib/setGetFeatures';

interface updateFeatureFlagsOptions {
  userId: string;
  newFeatures: Partial<FeatureFlags>;
}

export const updateFeatureFlags = createAsyncThunk<
  void,
  updateFeatureFlagsOptions,
  ThunkConfig<string>
>('profile/updateProfileData', async ({ userId, newFeatures }, thunkApi) => {
  const { dispatch, rejectWithValue } = thunkApi;

  const allFeatures = {
    ...getAllFeatureFlags(),
    ...newFeatures,
  };

  try {
    await dispatch(
      updateFeatureFlagsMutation({
        userId,
        features: allFeatures,
      }),
    );

    setFeatureFlags(allFeatures);

    return undefined;
  } catch (e) {
    console.log(e);
    return rejectWithValue('');
  }
});
