import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class UserForm extends Component {
    render() {
        const styles = {
            form: {
                padding: '1rem'
            },
            input: {
                borderRadius: 3,
                borderColor: '#ddd'
            }
        };

        return (
            <form style={styles.form} onSubmit={this.props.handleSubmit}>
                <h3>User Info</h3>
                <div>
                    Name: <Field name="name"
                                 type="text"
                                 component="input"
                                 placeholder="Me"
                                 style={styles.input} />
                </div>
                <div>
                    Email: <Field name="email"
                                  type="email"
                                  component="input"
                                  placeholder="me@expapp.com"
                                  style={styles.input} />
                </div>
                <h3>Credit Card Info</h3>
                <div>
                    Card Number: <Field name="cardNumber"
                                  type="text"
                                  component="input"
                                  style={styles.input} />
                </div>
                <div>
                    Month: <Field name="month"
                                  type="number"
                                  component="input"
                                  style={styles.input} />
                </div>
                <div>
                    Year: <Field name="year"
                                  type="number"
                                  component="input"
                                  style={styles.input} />
                </div>
            </form>
        )
    }
}

UserForm = reduxForm({ form: 'userForm' })(UserForm);

export default UserForm;
