// ✅ type-only import
import type { TypedUseSelectorHook } from 'react-redux';

// ✅ value imports
import { useDispatch, useSelector } from 'react-redux';

// ✅ type imports from your store
import type { RootState, AppDispatch } from '../../store';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;