import styles from './Button.module.css'

interface Props {
    children: string;
    color?: 'primary'|'secondary';
    onClick: () => void;
}

function ButtonEx({children, onClick,color ='primary'}: Props) {
  return (
    <>
    <button className= {[styles.btn, styles['btn-'+ color]].join(' ')} onClick={onClick}>{children}</button>
    </>
  )
}

export default ButtonEx