import { useState } from 'react';
import type { ChangeEvent } from 'src/types/Event';

export const useOnChange = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e: ChangeEvent): void => setValue(e?.target?.value);
  return { value, onChange };
};
