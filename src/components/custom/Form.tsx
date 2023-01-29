import { Select, Space } from 'antd';
import CustomSelect from './Select';

type Item = {
    _type: string,
    _key: string,
    _label?: string,
};

export type SelectType = Item & typeof Select;

export type FormType = {
    form: Array<SelectType>,
    // onChange: () => void,
};

const Form: React.FC<FormType> = ({ form }: FormType) => {
    return (
        <Space className="flex-row">
            {form.map((item) => {
                const { _type, _key } = item;

                if (_type === 'select') {
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    return <CustomSelect popupClassName="form-select-dropdown" {...item} key={_key} className="form-select" />;
                }

                return '';
            })}
        </Space>
    );
};

export default Form;
