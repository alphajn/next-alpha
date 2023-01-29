import { useState } from 'react';
import { Select } from 'antd';
import type { SelectProps } from 'antd';
// eslint-disable-next-line import/no-extraneous-dependencies
import { SearchOutlined, LoadingOutlined } from '@ant-design/icons';

type SuffixIconProps = {
    loading: boolean,
    showSearch: boolean,
    opend: boolean,
};

/** 图标 */
const SuffixIcon = ({ loading, showSearch, opend }: SuffixIconProps) => {
    if (loading) {
        return <LoadingOutlined />;
    }

    if (showSearch && opend) {
        return <SearchOutlined />;
    }

    return <i className="icon-caret-down fz16" />;
};

const CustomSelect: React.FC<SelectProps> = (props: SelectProps) => {
    const [opend, setOpend] = useState(false);
    const { loading = false, showSearch = false, onDropdownVisibleChange } = props;

    const defaultProps = {
        bordered: false,
        listHeight: 200,
        optionFilterProp: 'label',
        suffixIcon: <SuffixIcon loading={loading} showSearch={showSearch} opend={opend} />,
        ...props,
        onDropdownVisibleChange(open: boolean) {
            setOpend(open);

            if (typeof onDropdownVisibleChange === 'function') {
                onDropdownVisibleChange(open);
            }
        },
    };

    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Select {...defaultProps} />;
};

export default CustomSelect;
