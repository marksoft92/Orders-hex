import React from 'react';
import { TimePicker } from 'antd';
import dayjs  from 'dayjs';
import { FormattedMessage } from 'react-intl';

interface PreparationTimeInputProps {
  handleBlur: (e: React.FocusEvent<any>) => void;
  error?: string;
  touched?: boolean;
  setFieldValue: (field: string, value: any) => void;
}

const PreparationTimeInput: React.FC<PreparationTimeInputProps> = ({
  handleBlur,
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

      { error && <div className='error'><FormattedMessage id={'required'}/></div>}
    </div>
  );
};

export default PreparationTimeInput;
