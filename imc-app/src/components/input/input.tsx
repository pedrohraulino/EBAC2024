interface InputProps {
    label: string;
    valor: string;
    onChange: (value: string) => void;
    placeholder: string;
    className?: string; 
}

function Input(props: InputProps) {
    return (
        <div className="inputs">
            <label htmlFor={props.label}>{props.label}</label>
            <input
                type="number"
                id={props.label}
                value={props.valor}
                onChange={(e) => props.onChange(e.target.value)}
                placeholder={props.placeholder}
            />
        </div>
    );
}

export default Input;
