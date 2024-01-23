const interfaceConst = 'interface';

module.exports = (componentName) => `import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './${componentName}.module.scss';
import { memo, FC } from 'react';

${interfaceConst} ${componentName}Props {
    className?: string;
}

export const ${componentName}:FC<${componentName}Props> = memo((props) => {
    const { className } = props;
    const { t } = useTranslation();
    
    return (
        <div className={classNames(cls.${componentName}, {}, [className])}>
           
        </div>
    );
});`;
