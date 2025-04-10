import { useState } from 'react'
import { useTranslation } from 'react-i18next'

/** Contact Form Component a comprehensive contact form with client-side validation, internationalization and API integration with Web3Forms for form submission. **/
const Contact = () => {
  /** Translation hook for internationalization, Provides the t function to access translation strings **/
  const { t } = useTranslation();

  /** Form state management, Tracks user input across all form fields **/
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: ''
  })

  /** Error and submission status management **/
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('')

  /** Validates all form fields according to business rules, Sets error messages for invalid fields **/
  const validateForm = () => {
    const newErrors = {}
    
    // Name validation: required, min 2 characters
    if (!formData.name.trim()) {
      newErrors.name = t('contact.form.errors.nameRequired')
    } else if (formData.name.length < 2) {
      newErrors.name = t('contact.form.errors.nameLength')
    }

    // Email validation: required, valid format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email) {
      newErrors.email = t('contact.form.errors.emailRequired')
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = t('contact.form.errors.emailInvalid')
    }

    // Message validation: required, min 10 characters
    if (!formData.message.trim()) {
      newErrors.message = t('contact.form.errors.messageRequired')
    } else if (formData.message.length < 10) {
      newErrors.message = t('contact.form.errors.messageLength')
    }

    // Update error state and return validation result
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  /** Handles input field changes, Updates form state and clears validation errors for the changed field **/
  const handleChange = (e) => {
    const field = e.target;
    
    // Update form data with new field value
    setFormData({
      ...formData,
      [field.name]: field.value
    });
    
    // Clear any browser validation messages
    field.setCustomValidity('');
    
    // Clear any existing error for this field
    if (errors[field.name]) {
      setErrors({
        ...errors,
        [field.name]: ''
      });
    }
  };

  /** Handles form submission, Performs validation, sends data to Web3Forms API, and handles respons **/
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    
    // Reset all browser validation messages
    form.querySelectorAll('input, textarea').forEach(field => {
      field.setCustomValidity('');
    });

    /** Validates individual form fields and sets browser validation messages, Integrates with HTML5 constraint validation API **/
    const validateField = (field) => {
      // Check for empty fields
      if (!field.value.trim()) {
        field.setCustomValidity(t(`contact.form.errors.${field.name}Required`));
        return false;
      }
      
      // Email format validation
      if (field.name === 'email' && !field.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        field.setCustomValidity(t('contact.form.errors.emailInvalid'));
        return false;
      }
      
      // Message length validation
      if (field.name === 'message' && field.value.length < 10) {
        field.setCustomValidity(t('contact.form.errors.messageLength'));
        return false;
      }
      
      return true;
    };

    // Apply validation to all non-button form elements
    const isValid = Array.from(form.elements)
      .filter(el => el.tagName.toLowerCase() !== 'button')
      .every(validateField);

    // Exit if HTML5 validation fails
    if (!isValid) {
      return false;
    }

    // Run our custom validation as a second layer
    if (validateForm()) {
      try {
        // Send data to Web3Forms API
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            access_key: process.env.REACT_APP_WEB3FORMS_KEY,
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message
          })
        })

        const data = await response.json()
        
        // Handle successful form submission
        if (data.success) {
          setStatus('Message sent successfully!')
          // Reset form to initial state
          setFormData({
            name: '',
            email: '',
            subject: 'general',
            message: ''
          })
          setErrors({})
        } else {
          // Handle API error response
          setStatus('Failed to send message. Please try again.')
        }
      } catch (error) {
        // Handle network or other exceptions
        setStatus('Failed to send message. Please try again.')
        console.error('Submit error:', error)
      }
    }
  }

  /** Renders the contact form with all input fields, validation messages, and submission status **/
  return (
    <div className="contact-container">
      <div className="contact-content">
        <form className="contact-form" onSubmit={handleSubmit}>
          {/* Form header */}
          <h1>{t('contact.title')}</h1>
          <p>{t('contact.subtitle')}</p>
          
          {/* Name input field group */}
          <div className={`form-group ${errors.name ? 'has-error' : ''}`}>
            <label htmlFor="name">{t('contact.form.name')}</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              onInvalid={(e) => {
                e.target.setCustomValidity(t('contact.form.errors.nameRequired'));
              }}
              onInput={(e) => e.target.setCustomValidity('')}
            />
            {errors.name && <span className="validation-message error">{errors.name}</span>}
          </div>

          {/* Email input field group */}
          <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
            <label htmlFor="email">{t('contact.form.email')}</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              onInvalid={(e) => {
                e.target.setCustomValidity(t('contact.form.errors.emailRequired'));
              }}
              onInput={(e) => e.target.setCustomValidity('')}
            />
            {errors.email && <span className="validation-message error">{errors.email}</span>}
          </div>

          {/* Subject selection dropdown */}
          <div className="form-group">
            <label htmlFor="subject">{t('contact.form.subject')}</label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            >
                <option value="general">{t('contact.subjectOptions.general')}</option>
                <option value="support">{t('contact.subjectOptions.support')}</option>
                <option value="feedback">{t('contact.subjectOptions.feedback')}</option>
            </select>
          </div>

          {/* Message textarea field group */}
          <div className={`form-group ${errors.message ? 'has-error' : ''}`}>
            <label htmlFor="message">{t('contact.form.message')}</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
              onInvalid={(e) => {
                e.preventDefault();
                e.target.setCustomValidity(t('contact.form.errors.messageRequired'));
              }}
              onInput={(e) => e.target.setCustomValidity('')}
            />
            {errors.message && <span className="validation-message error">{errors.message}</span>}
          </div>

          {/* Form submission status message */}
          {status && (
            <div className={`message ${status.includes('successfully') ? 'success' : 'error'}`}>
              {status.includes('successfully') ? t('contact.form.success') : t('contact.form.error')}
            </div>
          )}

          {/* Submit button */}
          <button type="submit" className="submit-button">
            {t('contact.form.send')}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact