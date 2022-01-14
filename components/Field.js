export default function Field(props) {
  return (
    <>
      <div className="field">
        <label className="label">{props.label}</label>
        <div className="control">
          <input
            autoComplete="off"
            required
            className={`input ${props.errors.name && 'is-danger'}`}
            {...props}
          />
          {props.errors[props.name] && <p className="help is-danger">{props.errors[props.name]}</p>}
        </div>
      </div>
      <style jsx>
        {`
          .field {
            margin-bottom: 10px;
          }
          input .is-danger {
            border: solid 1px red;
          }
          .help {
            font-size: 12px;
            color: red;
          }
        `}
      </style>
    </>
  );
}
