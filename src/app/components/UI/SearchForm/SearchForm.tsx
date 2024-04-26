import React from 'react'
import {Formik, Form, Field} from 'formik'

interface SearchFormProps {
    onSearch: (searchQuery: string) => void
    ph: string
    cn: string
}

interface SearchFormValues {
    search: string
}

const SearchForm: React.FC<SearchFormProps> = ({cn, ph, onSearch}) => {
    const initialValues: SearchFormValues = {search: ''}

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={() => {}}>
            {({setFieldValue}) => (
                <Form className={cn}>
                    <Field name='search' type='text' placeholder={ph} className={cn} onChange={
                        (e: React.ChangeEvent<HTMLInputElement>) => {
                            const value = e.target.value
                            setFieldValue('search', value)
                            onSearch(value)
                        }}
                    />
                </Form>
            )}
        </Formik>
    )
}

export default SearchForm