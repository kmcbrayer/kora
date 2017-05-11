import React from 'react';

export default class UserForm extends React.Component {
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
            <form style={styles.form}>
                <div>
                    Name: <input type="text"
                                 onChange={this.props.updateName}
                                 value={this.props.userInfo.name}
                                 placeholder="Me"
                                 style={styles.input} />
                </div>
                <div>
                    Email: <input type="email"
                                  onChange={this.props.updateEmail}
                                  value={this.props.userInfo.email}
                                  required
                                  placeholder="me@expapp.com"
                                  style={styles.input} />
                </div>
            </form>
        )
    }
}
