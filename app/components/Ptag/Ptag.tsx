import { PtagProps } from "./Ptag.props";
import style from './Ptag.module.css';
import cn from 'classnames';


export const Ptag = ({size = 'm', children, className, ...props}: PtagProps): JSX.Element => {

    return (
        <p  className={cn(style.paragraph, className, {[style.small]   : size == 'sm', [style.medium]  : size == 'm', [style.large]   : size == 'xl',
            })}>
                {children}
        </p>
    )
}