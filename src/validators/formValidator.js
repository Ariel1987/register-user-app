export class Validator {
    static validateEmptyFields(fields) {
        const result = fields.map(field => {
            if (field.value.trim().length === 0) {
                return {
                    title: 'Invalid input',
                    message: `Please enter a valid ${field.name} and ${field.age} (non-empty values)`
                }
            }
            return null
        })
        return result.filter(r => r !== null)
    }

    static validatePositiveNumber(field) {
        if (+field < 1) {
            return {
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0)'
            }
        }
        return null
    }
}


