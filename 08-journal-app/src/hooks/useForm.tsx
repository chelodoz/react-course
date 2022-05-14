import { ChangeEvent, useState } from 'react';

export const useForm = <T extends Object>(initialState: T) => {

    const [values, setValues] = useState(initialState);

    const reset = (newformState: T = initialState) => {
        setValues(newformState);
    }


    const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

        setValues({
            ...values,
            [target.name]: target.value
        });

    }

    return { ...values, handleInputChange, reset };

}