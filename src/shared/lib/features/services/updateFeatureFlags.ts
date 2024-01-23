import { ThunkConfig } from '@/app/providers/StoreProvider';
import { FeatureFlags } from '@/shared/types/featureFlags';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { updateFeatureFlagsMutation } from '../api/featureFlagsApi';
import { getAllFeatureFlags } from '../lib/setGetFeatures';

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

  try {
    await dispatch(
      updateFeatureFlagsMutation({
        userId,
        features: {
          ...getAllFeatureFlags(),
          ...newFeatures,
        },
      }),
    );

    window.location.reload();
  } catch (e) {
    console.log(e);
    return rejectWithValue('');
  }
});
