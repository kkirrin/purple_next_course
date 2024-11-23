import { ButtonProps } from './Button.props';
import styles from './Button.module.css';
import cn from 'classnames';

import Arrow from './up.svg';
import Image from 'next/image';

export const Button = ({ appearance, arrow = 'none', children, className, ...props }: ButtonProps): JSX.Element => {

   return (
    <>
    <button 
    className={cn(styles.button, className, {
        [styles.primary]    :   appearance == 'primary', 
        [styles.ghost]      :   appearance == 'ghost' 
        })}
        {...props}>
        {children}
        {arrow !== 'none' && <span className={cn(styles.arrow, {
            [styles.down]: arrow == 'down',
            
        })}>

        <Image
            src={Arrow}
            alt="My SVG"
            width={200}
            height={200}
        />

            </span>}
    </button>
    </>
   )


}