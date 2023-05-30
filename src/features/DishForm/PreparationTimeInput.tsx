// PreparationTimeInput.tsx

import React from 'react';
import { TimePicker } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import { FormattedMessage } from 'react-intl';

interface PreparationTimeInputProps {
  handleChange: (e: React.ChangeEvent<any> | Dayjs, timeString?: string) => void;
  handleBlur: (e: React.FocusEvent<any>) => void;
  value: string;
  error?: string;
  touched?: boolean;
  setFieldValue: (field: string, value: any) => void;
}

const PreparationTimeInput: React.FC<PreparationTimeInputProps> = ({
  handleChange,
  handleBlur,
  value,
  error,

  setFieldValue,
}) => {
  return (
    <div className='d-flex'>
      <label htmlFor="preparation_time"><FormattedMessage id="preparation_time" /></label>
      <TimePicker
        onChange={(_, timeString: string) =>
          setFieldValue('preparation_time', timeString)
        }
        defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')}
        name="preparation_time"
        onBlur={handleBlur}

      />

      { error && <div className='error'>{error}</div>}
    </div>
  );
};

export default PreparationTimeInput;
