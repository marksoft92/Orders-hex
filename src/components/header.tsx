import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Button, Popover, Select } from 'antd';


import { setCurrentLanguage } from '../features/languages/languagesSlice';
import { FormattedMessage } from 'react-intl';

const Header: React.FC = () => {
    const [visible, setVisible] = useState<boolean>(false);

    const dispatch = useDispatch();

    const content = (
        <div>
            <FormattedMessage id="header.infoTooltip" />
        </div>
    );

    const handleVisibleChange = (visible: boolean) => {
        setVisible(visible);
    };


    const handleLanguageChange = (coutryCode: string) => {
        dispatch(setCurrentLanguage(coutryCode));
    };
    return (
        <header>
            <Link to="/"><FormattedMessage id="title" /></Link>
            <div>  <Select
                defaultValue="en"
                style={{ width: 120 }}
                onChange={v => handleLanguageChange(v)}
                options={[
                    { value: 'pl', label: <FormattedMessage id="app.languagePl" /> },
                    { value: 'en', label: <FormattedMessage id="app.languageEn" /> },
                ]}
            />

                <Popover
                    content={content}
                    title={<FormattedMessage id="header.infoTitle" />}
                    trigger="click"
                    open={visible}
                    onOpenChange={handleVisibleChange}
                >
                    <Button type="primary" size="small">
                        <FormattedMessage id="header.info" />
                    </Button>
                </Popover>
            </div>
        </header>
    );
};

export default Header;