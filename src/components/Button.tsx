type button={
    title:JSX.Element|string;
    className?:string;
    onClick?:()=>void
}


const Button = ({title,className,onClick}:button) => {
  return (
    <button type='submit' className={className} onClick={onClick}>{title}</button>
  )
}

export default Button
