import React, { useState, useEffect } from 'react';
import './SignUp.css';
import { useNavigate } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function SignUp() {
    const [showCalendar, setShowCalendar] = useState(false);
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        dob: new Date(),
        email: '',
        gender: ''
    });
    const [error, setError] = useState('');
    const [warn, setWarn] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (error) {
            const timer = setTimeout(() => setError(''), 5000);
            return () => clearTimeout(timer);
        }
    }, [error]);

    useEffect(() => {
        if (warn) {
            const timer = setTimeout(() => setWarn(''), 5000);
            return () => clearTimeout(timer);
        }
    }, [warn]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // For Calendar date picker
    const handleDateChange = (date) => {
        setForm({ ...form, dob: date });
        setShowCalendar(false);
    };

    const storeSession = () => {
        sessionStorage.setItem('userItem', JSON.stringify({
            firstName: form.firstName,
            lastName: form.lastName,
            dob: form.dob,
            email: form.email,
        }));
        console.log('User data stored in session:', form);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.firstName || !form.lastName) {
            setError('Please fill in all fields.');
            return;
        } else if (form.firstName.match(/[^a-zA-Z]/) || form.lastName.match(/[^a-zA-Z]/)) {
            setWarn('First and Last Name can only contain letters.');
            return;
        } else if (form.email.match(/[^a-zA-Z0-9]@[^a-zA-Z].[co | com | in]/)) {
            setWarn('Please provide correct email address.');
            return;
        }
        setError('');
        // Handle sign up logic here
        storeSession();
        alert(`Sign up successful for user ${form.firstName} ${form.lastName}`);
        navigate('/');
        window.location.reload(); // Reload to reflect changes
    };

    const handleGoogleSignIn = () => {
        // Handle Google sign in logic here
        sessionStorage.setItem('username', form.username);
        sessionStorage.setItem('password', form.password);
        console.log('Sign up successful with username:', form.username);
        alert('Google sign in clicked!');
    };

    return (
        <div className="signup-container">
            <h2>Sign Up</h2>
            <form className="signup-form" onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    autoComplete="given-name"
                    placeholder='Enter your First Name'
                    maxLength={20}
                    minLength={3}
                />
                <label htmlFor="lastName">Last Name</label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    autoComplete="family-name"
                    placeholder='Enter your Last Name'
                    maxLength={20}
                    minLength={3}
                />
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    autoComplete="email"
                    placeholder='abc@xyz.com'
                />
                <label htmlFor="dob">Date of Birth</label>
                <div style={{ position: 'relative', marginBottom: '12px' }}>
                    <input
                        type="text"
                        id="dob"
                        name="dob"
                        value={form.dob ? form.dob.toLocaleDateString() : ''}
                        onClick={() => setShowCalendar((prev) => !prev)}
                        readOnly
                        placeholder="Select your Date of Birth"
                        style={{ cursor: 'pointer', background: '#f9f9f9' }}
                    />
                    {showCalendar && (
                        <div style={{ position: 'absolute', zIndex: 10, top: 40 }}>
                            <Calendar
                                value={form.dob}
                                onChange={handleDateChange}
                                minDate={new Date('1900-01-01')}
                                maxDate={new Date()}
                            />
                        </div>
                    )}
                </div>
                {error && <div className="signup-error">{error}</div>}
                {warn && <div className="signup-warn">{warn}</div>}
                <button type="submit" className="signup-btn">Sign Up</button>
            </form>
            <div className="signup-divider">OR</div>
            <button className="google-signin-btn" onClick={handleGoogleSignIn}>
                <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google logo" className="google-logo" />
                Sign up with Google
            </button>
        </div>
    );
}

export default SignUp;
