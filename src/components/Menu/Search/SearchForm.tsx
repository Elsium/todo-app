import React from 'react'
import {Formik, Form, Field} from 'formik'
import {useSearchParams} from 'next/navigation'

interface SearchFormProps {
    onSearch: (searchQuery: string) => void
    ph: string
    cn: string
}

interface SearchFormValues {
    search: string
}

const SearchForm: React.FC<SearchFormProps> = ({cn, ph, onSearch}) => {
    const searchParams = useSearchParams()
    const queryTitle = searchParams.get('title')
    const initialValues: SearchFormValues = {search: queryTitle || ''}

    return (
        <Formik
            initialValues={initialValues}
            enableReinitialize={true}
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