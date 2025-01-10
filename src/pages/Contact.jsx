import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const Contact = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: ''
  })

  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('')

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email) {
      newErrors.email = 'Email is required'
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })

    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (validateForm()) {
      try {
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
        
        if (data.success) {
          setStatus('Message sent successfully!')
          setFormData({
            name: '',
            email: '',
            subject: 'general',
            message: ''
          })
          setErrors({})
        } else {
          setStatus('Failed to send message. Please try again.')
        }
      } catch (error) {
        setStatus('Failed to send message. Please try again.')
        console.error('Submit error:', error)
      }
    }
  }

  return (
    <div className="contact-container">
      <div className="contact-content">
        <form className="contact-form" onSubmit={handleSubmit}>
        <h1>{t('contact.title')}</h1>
        <p>{t('contact.subtitle')}</p>
          <div className={`form-group ${errors.name ? 'has-error' : ''}`}>
            <label htmlFor="name">{t('contact.form.name')}</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            {errors.name && <span className="validation-message error">{errors.name}</span>}
          </div>

          <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
            <label htmlFor="email">{t('contact.form.email')}</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <span className="validation-message error">{errors.email}</span>}
          </div>

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

          <div className={`form-group ${errors.message ? 'has-error' : ''}`}>
            <label htmlFor="message">{t('contact.form.message')}</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            />
            {errors.message && <span className="validation-message error">{errors.message}</span>}
          </div>

          {status && (
            <div className={`message ${status.includes('successfully') ? 'success' : 'error'}`}>
              {status.includes('successfully') ? t('contact.form.success') : t('contact.form.error')}
            </div>
          )}

          <button type="submit" className="submit-button">
          {t('contact.form.send')}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact