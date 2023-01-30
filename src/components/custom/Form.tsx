import { useEffect, useState, useCallback } from 'react';
import { Select } from 'antd';
import CustomSelect from './Select';
import styles from './form.module.scss';

type Item = {
    _type: string,
    _key: string,
    _label?: string,
    _split?: string,
};

export type SelectType = Item & typeof Select;

export type FormType = {
    form: Array<SelectType>,
    onChange: (result: Record<string, string | number>) => void,
};

const Form: React.FC<FormType> = ({ form, onChange }: FormType) => {
    const [result, setResult] = useState<Record<string, string | number>>({});

    const updateResult = useCallback(() => {
        console.log(1);
        const tmp: Record<string, string | number> = {};

        // form.forEach((item) => {
        //     const { _key, defaultValue } = item;

        //     tmp[_key] = defaultValue;
        // });

        setResult(tmp);
        onChange(tmp);
    }, [result]);

    useEffect(() => {
        updateResult();
    }, [form]);
    return (
        <div className={`flex-row ${styles.form}`}>
            {form.map((item) => {
                const { _type, _key, _label, _split } = item;

                return [
                    <div key={_key} className="form-item" data-type={_type}>
                        <div className="text-gray-t2 fz12 lh18 h18 mb4 ellipsis">{_label}</div>

                        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                        <CustomSelect popupClassName="form-select-dropdown" {...item} className="form-select" />
                    </div>,
                    _split && (
                        <div className="lh40 text-gray-t3 fz20" style={{ margin: '22px -8px 0' }} key={`${_key}1`}>
                            {_split}
                        </div>
                    ),
                ];
            })}
        </div>
    );
};

export default Form;
