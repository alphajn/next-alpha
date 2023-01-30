import { useState } from 'react';
import Form from '@/components/custom/Form';

const Home: React.FC = () => {
    const [form] = useState<any>([
        {
            _label: '状态状态状态状态状态状态状态状态状态',
            _key: 'status',
            _type: 'select',
            _split: '/',
            defaultValue: 'jack',
            options: [
                { value: 'jack', label: 'jack-1' },
                { value: 'lucy', label: 'jack-2' },
            ],
        },
        {
            _label: '日历日历日历日历日历日历日历日历日历日历日历日历日历日历日历日历',
            _key: 'calendar',
            _type: 'calendar',
        },
        {
            _label: '',
            _key: 'calendar',
            _type: 'calendar',
        },
    ]);

    const onChange = (result: any) => {
        console.log(result);
    };

    return (
        <div className="p10 flex-row-center">
            <Form form={form} onChange={onChange} />
        </div>
    );
};

export default Home;
