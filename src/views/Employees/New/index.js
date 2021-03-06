import React from 'react';
import PropTypes from 'prop-types';

import Card from 'components/generic/Card';
import CardContent from 'components/generic/Card/CardContent';
import CardFooter from 'components/generic/Card/CardFooter';
import CardHeader from 'components/generic/Card/CardHeader';
import FormFooter from 'components/generic/Form/FormFooter';
import './new.css';
import i18n from 'i18n/en';
import EmployeeForm from 'components/business/EmployeeForm';
import employeeSchema from 'components/business/EmployeeForm/schema';
import { Form, Formik } from 'formik';

const { ADD } = i18n.EMPLOYEE;

const NewEmployeeComponent = (props) => {
  const { history, addEmployee } = props;

  const goToListPage = () => history.replace('/employees');
  return (
    <Card>
      <CardHeader title={ADD.TITLE} subtitle={ADD.SUBTITLE} />
      <Formik
        initialValues={{
          fullName: '', birthDate: '', jobTitle: '', country: '', salary: '',
        }}
        validationSchema={employeeSchema}
        onSubmit={(values) => {
          addEmployee(values);
          goToListPage();
        }}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <CardContent>
              <div className="employee-form mx-auto">
                <EmployeeForm />
              </div>
            </CardContent>
            <CardFooter className="employee-form--footer">
              <FormFooter
                cancelButton={{
                  label: ADD.CANCEL,
                  onClick: goToListPage,
                }}
                submitButton={{
                  label: ADD.SUBMIT,
                  type: 'submit',
                }}
              />
            </CardFooter>
          </Form>
        )}
      </Formik>
    </Card>
  );
};

NewEmployeeComponent.propTypes = {
  addEmployee: PropTypes.func.isRequired,
  history: PropTypes.shape({
    replace: PropTypes.func,
  }).isRequired,
};

NewEmployeeComponent.defaultProps = {
};

export default NewEmployeeComponent;
