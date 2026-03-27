
export interface RegisterUser {
    email: string,
    password: string,
    nickname: string,
}

export interface ValidateNicknameSchema {
    message?: string
}

interface FormFieldsServerError {
    emailError?: string,//я уверен,что это string
    nicknameError?: string,//я уверен,что это string
}

export interface RegisterSchema {
    isLoading: boolean,
    formError: FormFieldsServerError
}