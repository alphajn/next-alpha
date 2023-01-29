import { useState } from 'react';
import Form from '@/components/custom/Form';

const Home: React.FC = () => {
    const [form, setForm] = useState<any>([
        {
            _label: '状态',
            _key: 'status',
            _type: 'select',
            defaultValue: 'abc',
            loading: false,
            // disabled: true,
            // open: true,
            options: [
                { value: 'jack', label: 'Jack' },
                { value: 'lucy', label: 'Lucy' },
                { value: 'Yiminghe', label: 'yiminghe' },
                { value: 'Yiming2he', label: 'yiminghe' },
                { value: 'Yimingh3e', label: 'yiminghe' },
                { value: 'abc', label: 'yimingheyimingheyimingheyimingheyimingheyiminghe' },
                { value: 'disabled', label: 'Disabled', disabled: true },
            ],
        },
        {
            _label: '状态',
            _key: 'status1',
            _type: 'select',
            defaultValue: 'abc',
            showSearch: true,
            loading: false,
            options: [
                { value: 'jack', label: 'Jack' },
                { value: 'lucy', label: 'Lucy' },
                { value: 'Yiminghe', label: 'yiminghe' },
                { value: 'Yiming2he', label: 'yiminghe' },
                { value: 'Yimingh3e', label: 'yiminghe' },
                { value: 'abc', label: 'yimingheyimingheyimingheyimingheyimingheyiminghe' },
                { value: 'disabled', label: 'Disabled', disabled: true },
            ],
        },
    ]);

    setForm(form);

    return (
        <div className="p10 flex-row-center">
            <Form form={form} />
        </div>
    );
};

export default Home;
