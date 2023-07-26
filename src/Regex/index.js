const emailRegex =
    /^[a-zA-Z]+([.-]?[a-zA-Z0-9]+)*@([a-zA-Z.-]+([.-]?[a-zA-Z]))[.]{1}[a-zA-Z]{2,}$/;
const passwordRegex =
    /^(?=.*?[a-z])(?=.*?[0-9])(?=.*[$@$!%*?&.])(?=.*?[^\w\s]).{8,}$/;
const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
const phoneNumberRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/

export { emailRegex, passwordRegex, nameRegex, phoneNumberRegex };